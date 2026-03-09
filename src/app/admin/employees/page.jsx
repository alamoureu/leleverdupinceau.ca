'use client';

import dynamic from 'next/dynamic';

const EmployeeManagement = dynamic(() => import('@/views/EmployeeManagement').then((m) => m.default), { ssr: false });

export default function EmployeesPage() {
  return <EmployeeManagement />;
}
