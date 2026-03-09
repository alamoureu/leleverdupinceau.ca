'use client';

import dynamic from 'next/dynamic';

const EmployeeDetails = dynamic(() => import('@/views/EmployeeDetails').then((m) => m.default), { ssr: false });

export default function EmployeeDetailsPage() {
  return <EmployeeDetails />;
}
