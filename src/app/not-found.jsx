'use client';

import dynamic from 'next/dynamic';

const NewWebsiteLayout = dynamic(
  () => import('@/lelever-next/layout/NewWebsiteLayout').then((m) => m.default),
  { ssr: false }
);
const NotFoundPage = dynamic(
  () => import('@/lelever-next/pages/NotFoundPage').then((m) => m.default),
  { ssr: false }
);

export default function NotFound() {
  return (
    <NewWebsiteLayout>
      <NotFoundPage />
    </NewWebsiteLayout>
  );
}
