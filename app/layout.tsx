import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/layout/footer';
import { StickyButton } from '@/components/layout/sticky-button';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TrafficPulse - Digital Marketing Agency',
  description: 'Drive growth with data-driven marketing. Paid traffic, automation, and analytics that deliver measurable results.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyButton />
        <Toaster />
      </body>
    </html>
  );
}