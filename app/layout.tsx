import type { Metadata } from 'next';
import '@/app/tailwind.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata: Metadata = {
  title: {
    template: '%s | Passave',
    default: 'Passave',
  },
  description: 'Secure Password Manager',
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#651fff',
      },
    ],
  },
  manifest: '/site.webmanifest',
  applicationName: 'Passave',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
