import './globals.css';
import { Inter, Outfit, Space_Mono, Michroma } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const michroma = Michroma({ weight: '400', subsets: ['latin'], variable: '--font-michroma' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' });

export const metadata = {
  title: 'mopadz | Premium Desk Mats',
  description: 'Premium, high-performance desk mats designed for gamers, creators, and professionals who demand visual excellence. Free shipping across India.',
  keywords: ['desk mats', 'premium desk pads', 'gaming mouse pad', 'workspace accessories', 'mopadz'],
  openGraph: {
    title: 'mopadz | Premium Desk Mats',
    description: 'Premium, high-performance desk mats designed for gamers, creators, and professionals who demand visual excellence.',
    type: 'website',
  },
};

import { WishlistProvider } from '../context/WishlistContext';
import { CartProvider } from '../context/CartContext';
import AnnouncementBar from '../components/AnnouncementBar';
import BottomNav from '../components/BottomNav';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${outfit.variable} ${michroma.variable} ${spaceMono.variable}`}>
        <CartProvider>
          <WishlistProvider>
            <AnnouncementBar />
            {children}
            <BottomNav />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
