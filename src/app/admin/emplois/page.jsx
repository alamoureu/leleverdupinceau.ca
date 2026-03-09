'use client';

import dynamic from 'next/dynamic';

const EmploiesDashboard = dynamic(() => import('@/views/EmploiesDashboard').then((m) => m.default), { ssr: false });

export default function EmploisPage() {
  return <EmploiesDashboard />;
}
