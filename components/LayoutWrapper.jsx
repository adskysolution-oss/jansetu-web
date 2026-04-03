'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname() || '';
  
  // Check if current path is a dashboard panel
  const isPanelPanel = 
    pathname.startsWith('/admin') || 
    pathname.startsWith('/volunteer') || 
    pathname.startsWith('/partner');

  return (
    <>
      {!isPanelPanel && <Navbar />}
      {children}
      {!isPanelPanel && <Footer />}
    </>
  );
}
