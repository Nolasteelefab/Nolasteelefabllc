import Navigation from '@/components/globals/nav';
import Footer from '@/components/globals/footer';

import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <Navigation />
      <div className="min-h-dvh overflow-hidden pb-28 relative">{children}</div>
      <Footer />
    </div>
  );
}
