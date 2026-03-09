'use client';

import dynamic from 'next/dynamic';

const SoumissionDashboard = dynamic(() => import('@/views/SoumissionDashboard').then((m) => m.default), { ssr: false });

export default function SoumissionsPage() {
  return <SoumissionDashboard />;
}
