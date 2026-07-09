import './globals.css';
import { Inter, Outfit, Space_Mono, Michroma } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const michroma = Michroma({ weight: '400', subsets: ['latin'], variable: '--font-michroma' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' });

export const metadata = {
  title: 'DMND+ | Premium Desk Mats',
  description: 'Premium desk mats and accessories for your workspace.',
  keywords: ['desk mats', 'premium desk pads', 'gaming mouse pad', 'workspace accessories', 'DMND+'],
  openGraph: {
    title: 'DMND+ | Premium Desk Mats',
    description: 'Premium, high-performance desk mats designed for gamers, creators, and professionals who demand visual excellence.',
    type: 'website',
  },
};

import { WishlistProvider } from '../context/WishlistContext';
import { CartProvider } from '../context/CartContext';
import { AuthProvider } from '../context/AuthContext';
import AnnouncementBar from '../components/AnnouncementBar';
import BottomNav from '../components/BottomNav';
import AuthModal from '../components/AuthModal';
import WhatsAppButton from '../components/WhatsAppButton';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{__html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '00000000000000'); // PLACEHOLDER PIXEL ID
          fbq('track', 'PageView');
        `}} />
      </head>
      <body className={`${inter.className} ${outfit.variable} ${michroma.variable} ${spaceMono.variable}`}>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <AnnouncementBar />
              {children}
              <BottomNav />
              <AuthModal />
              <WhatsAppButton />
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
