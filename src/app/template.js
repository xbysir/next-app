import { Suspense } from 'react';
import Loading from '@/components/Loading';
export default function Template({ children }) {
  return (
    <div className="template">
      <Suspense fallback={<Loading></Loading>}>{children}</Suspense>
    </div>
  );
}
