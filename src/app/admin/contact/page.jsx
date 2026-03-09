'use client';

import dynamic from 'next/dynamic';

const ContactDashboard = dynamic(() => import('@/views/ContactDashboard').then((m) => m.default), { ssr: false });

export default function AdminContactPage() {
  return <ContactDashboard />;
}
