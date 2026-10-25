import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lumisync Studio | Moments that move brands',
  description: 'An independent event, brand and experience studio creating unforgettable moments and meaningful momentum.',
  keywords: ['event management', 'brand strategy', 'digital marketing', 'concerts', 'corporate events'],
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f8f7f3' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
