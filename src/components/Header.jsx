'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const noNavPaths = ['/login', '/register'];

  if (noNavPaths.includes(pathname)) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/next.svg"
            alt="Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-lg font-medium transition-colors hover:text-blue-600 ${
              pathname === '/' ? 'text-blue-600' : 'text-gray-700'
            }`}
          >
            首页
          </Link>
          <Link
            href="/products"
            className={`text-lg font-medium transition-colors hover:text-blue-600 ${
              pathname.startsWith('/products')
                ? 'text-blue-600'
                : 'text-gray-700'
            }`}
          >
            产品系列
          </Link>
          <Link
            href="/about"
            className={`text-lg font-medium transition-colors hover:text-blue-600 ${
              pathname === '/about' ? 'text-blue-600' : 'text-gray-700'
            }`}
          >
            关于我们
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="px-6 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            登录
          </Link>
          <Link
            href="/register"
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            立即预约
          </Link>
        </div>
      </nav>
    </header>
  );
}
