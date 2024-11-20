import { Suspense } from 'react';
import localFont from 'next/font/local';
import '../styles/globals.css';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';

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
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  h-full w-full`}
      >
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
