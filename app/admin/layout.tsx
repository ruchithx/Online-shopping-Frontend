// app/admin/layout.tsx
import Sidebar from './Sidebar'; // Import the Sidebar component
import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: '20px' }}>{children}</main>
    </div>
  );
}
