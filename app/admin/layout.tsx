// app/admin/layout.tsx
import Sidebar from './Sidebar'; // Import the Sidebar component
// layout.tsx

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (

    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-grow h-screen overflow-auto bg-gray-100 p-6">
        {children}
      </main>

    </div>
  );
};

export default Layout;
