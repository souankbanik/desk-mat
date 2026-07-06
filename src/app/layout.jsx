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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${outfit.variable} ${michroma.variable} ${spaceMono.variable}`}>
        <div style={{ backgroundColor: '#000000', color: '#ffffff', textAlign: 'center', padding: '10px 20px', fontSize: '7.5px', fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase', zIndex: 1000, position: 'relative' }}>
          🎉 Get 10% OFF when you order 2 or more desk mats!
        </div>
        {children}
      </body>
    </html>
  );
}
