import React from 'react';
import Link from 'next/link';
import '../dashboard.css';

export default function PartnerLayout({ children }) {
  return (
    <div className="dashboard-container">
      <aside className="sidebar partner-sidebar">
        <div className="sidebar-header">
          <h2><span className="logo-highlight">Jan</span> Setu</h2>
          <p>Partner Network</p>
        </div>
        <nav className="sidebar-nav">
          <Link href="/partner" className="nav-item active">📊 Overview</Link>
          <Link href="/partner/sales" className="nav-item">📈 Product Sales</Link>
          <Link href="/partner/activations" className="nav-item">✅ QR Activations</Link>
          <Link href="/partner/earnings" className="nav-item">💰 Earnings</Link>
          <Link href="/partner/support" className="nav-item">📞 Support Tickets</Link>
        </nav>
        <div className="sidebar-footer">
          <Link href="/" className="nav-item back-btn">⬅️ Back to Website</Link>
        </div>
      </aside>
      
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="region-select">
            Region: <strong>Madhya Pradesh (State Partner)</strong>
          </div>
          <div className="user-profile">Partner Portal</div>
        </header>
        <div className="dashboard-content">
          {children}
        </div>
      </main>
    </div>
  );
}
