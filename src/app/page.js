import Link from 'next/link';
export default function Home() {
  console.log('page在服务端和客户端打印了>>>→➡️➡️➡️');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to My First Next.js App!</h1>
      <p className="text-xl">
        This is just the beginning of something amazing.
      </p>
      <Link href="/about" className="text-blue-500 hover:underline">
        跳转About Us 页面
      </Link>
      <Link href="/posts" className="text-green-500 hover:underline">
        跳转posts 页面
      </Link>
    </main>
  );
}
