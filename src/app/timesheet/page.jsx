'use client';

import dynamic from 'next/dynamic';

const TimeSheet = dynamic(() => import('@/views/TimeSheet').then((m) => m.default), { ssr: false });

export default function TimeSheetPage() {
  return <TimeSheet />;
}
