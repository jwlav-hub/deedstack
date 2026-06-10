import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DeedStack — Your Equity, Your Terms',
  description:
    'Homeowner-controlled equity tokenization. Earn institutional-grade returns on your home equity — without debt, without deed transfer, without brokers.',
  keywords: ['home equity', 'tokenization', 'yield', 'Wyoming', 'real estate'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
