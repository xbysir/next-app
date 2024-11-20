'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Navbar() {
  const pathname = usePathname();
  const noNavPaths = ['/login', '/register'];
  if (noNavPaths.includes(pathname)) return null;
  return (
    <nav className="h-16 bg-blue-200" style={{ lineHeight: '4rem' }}>
      <ul className="flex gap-2 justify-between px-4">
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <Link href={'/about'}>About</Link>
      </ul>
    </nav>
  );
}
