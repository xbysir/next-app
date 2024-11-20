import localFont from 'next/font/local';
import '../styles/globals.css';
import Loading from '@/components/Loading';
import { Suspense } from 'react';
import Link from 'next/link';

const geistSans = localFont({
  src: '../styles/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../styles/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'next app',
  description: '我的next项目',
};
console.log('在服务端打印了>>>→➡️➡️➡️');

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <ul className="flex gap-2 justify-between px-4 bg-blue-700">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <Link href={'/about'}>About</Link>
          </ul>
        </nav>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
