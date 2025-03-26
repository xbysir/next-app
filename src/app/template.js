'use client';

import { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import Loading from '@/components/Loading';

export default function Template({ children }) {
  const pathname = usePathname();
  const isFullHeight = pathname === '/login' || pathname === '/register';

  return (
    <div
      className="template w-full"
      style={{
        height: isFullHeight ? '100%' : 'calc(100% - 60px)',
      }}
    >
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
