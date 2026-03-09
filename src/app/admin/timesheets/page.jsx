'use client';

import dynamic from 'next/dynamic';

const TimeSheetDashboard = dynamic(() => import('@/views/TimeSheetDashboard').then((m) => m.default), { ssr: false });

export default function TimesheetsPage() {
  return <TimeSheetDashboard />;
}
