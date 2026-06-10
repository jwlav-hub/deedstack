import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'DeedStack - Home Equity Tokenization',
    template: '%s | DeedStack',
  },
  description:
    'DeedStack converts verified home equity into tokenized collateral positions — a non-recourse pledge structure designed for accredited participants in Wyoming. Not a mortgage. Not a HELOC.',
  keywords: [
    'DeedStack',
    'home equity tokenization',
    'tokenized real estate',
    'DEED tokens',
    'home equity investment',
    'equity token pledge',
    'Wyoming blockchain',
    'Reg D 506c',
    'institutional fund access',
    'non-recourse token pledge',
  ],
  openGraph: {
    title: 'DeedStack - Home Equity Tokenization',
    description:
      'DeedStack converts verified home equity into tokenized collateral positions — a non-recourse pledge structure designed for accredited participants in Wyoming.',
    url: 'https://deedriver.com',
    siteName: 'DeedStack',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeedStack - Home Equity Tokenization',
    description:
      'DeedStack converts verified home equity into tokenized collateral positions — a non-recourse pledge structure designed for accredited participants in Wyoming.',
  },
  metadataBase: new URL('https://deedriver.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
