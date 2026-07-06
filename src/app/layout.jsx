import './globals.css';
import { Inter, Outfit, Space_Mono, Michroma } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const michroma = Michroma({ weight: '400', subsets: ['latin'], variable: '--font-michroma' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' });

export const metadata = {
  title: 'Premium Desk Mats | Elevate Your Workspace | DMND+',
  description: 'Premium, high-performance desk mats designed for gamers, creators, and professionals who demand visual excellence. Free shipping across India.',
  keywords: ['desk mats', 'premium desk pads', 'gaming mouse pad', 'workspace accessories', 'DMND+'],
  openGraph: {
    title: 'Premium Desk Mats | Elevate Your Workspace | DMND+',
    description: 'Premium, high-performance desk mats designed for gamers, creators, and professionals who demand visual excellence.',
    type: 'website',
  },
};

import { WishlistProvider } from '../context/WishlistContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${outfit.variable} ${michroma.variable} ${spaceMono.variable}`}>
        <div style={{ backgroundColor: '#000000', color: '#ffffff', textAlign: 'center', padding: '10px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase', zIndex: 1000, position: 'relative' }}>
          🎉 10% OFF 2+ DESK MATS!
        </div>
        <WishlistProvider>
          {children}
        </WishlistProvider>
      </body>
    </html>
  );
}
