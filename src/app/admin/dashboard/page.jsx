'use client';

import dynamic from 'next/dynamic';

const AdminDashboard = dynamic(() => import('@/views/AdminDashboard').then((m) => m.default), { ssr: false });

export default function AdminDashboardPage() {
  return <AdminDashboard />;
}
