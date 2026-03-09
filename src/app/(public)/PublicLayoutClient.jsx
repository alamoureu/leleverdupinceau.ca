'use client';

import dynamic from 'next/dynamic';

const NewWebsiteLayout = dynamic(
  () => import('@/lelever-next/layout/NewWebsiteLayout').then((m) => m.default),
  { ssr: false }
);

export default function PublicLayoutClient({ children }) {
  return <NewWebsiteLayout>{children}</NewWebsiteLayout>;
}
