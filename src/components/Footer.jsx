'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const noNavPaths = ['/login', '/register'];

  if (noNavPaths.includes(pathname)) return null;
  return (
    <footer className="bg-slate-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/next.svg"
                alt="Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-4">
              引领智能出行新时代，为您带来科技与艺术的完美融合体验。
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="WeChat"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.691 2C4.768 2 1.25 4.82 1.25 8.691c0 2.248 1.04 4.157 2.862 5.615.098.193-.193 1.04-.193 1.04l1.525-.772c.193 0 .579.097.772.097 3.826 0 7.344-2.82 7.344-6.691C13.56 4.82 10.042 2 8.691 2zm9.494 7.73c-3.047 0-5.674 2.627-5.674 5.674 0 1.814.907 3.434 2.434 4.34.094.188-.187.907-.187.907l1.253-.626c.187 0 .47.093.657.093 3.047 0 5.674-2.627 5.674-5.674 0-3.047-2.627-5.674-5.674-5.674z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="Weibo"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.672 4.018.259 2.6-2.759 5.049-6.74 5.443zM19.452 13.89c-.898-1.724-3.674-2.693-6.497-2.272l-.491.094c-.128-.148-.261-.287-.399-.422l-.136-.131c-2.11-1.968-4.76-2.817-6.403-1.902-1.643.918-1.755 3.262-.247 5.23 1.509 1.969 4.154 2.818 6.797 1.902.414-.145.806-.338 1.176-.563.201.215.423.414.658.596 1.507.889 3.281 1.279 5.146 1.131 2.467-.195 4.321-1.6 4.321-3.279 0-.135-.016-.271-.047-.404-.294-.309-.59-.617-.878-.93.001-.017.001-.034.001-.051l-.001.001zM15.778 3.639c-1.541-.53-3.108-.504-3.504.059-.396.562.539 1.445 2.08 1.975 1.541.53 3.108.504 3.504-.059.396-.562-.539-1.445-2.08-1.975z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  产品系列
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  关于我们
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  预约试驾
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">电话：400-888-8888</li>
              <li className="text-gray-600">邮箱：contact@example.com</li>
              <li className="text-gray-600">地址：北京市朝阳区XX大厦</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>
            © {new Date().getFullYear()} Next Test App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
