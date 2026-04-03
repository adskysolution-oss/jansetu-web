import React from 'react';
import Link from 'next/link';
import '../dashboard.css';

export default function AdminLayout({ children }) {
  return (
    <div className="dashboard-container">
      <aside className="sidebar admin-sidebar">
        <div className="sidebar-header">
          <h2><span className="logo-highlight">Jan</span> Setu</h2>
          <p>Super Admin</p>
        </div>
        <nav className="sidebar-nav">
          <Link href="/admin" className="nav-item active">🏠 Dashboard</Link>
          <Link href="/admin/users" className="nav-item">👥 Users Management</Link>
          <Link href="/admin/sos" className="nav-item">🚨 SOS Alerts</Link>
          <Link href="/admin/partners" className="nav-item">🤝 Partners</Link>
          <Link href="/admin/volunteers" className="nav-item">🧑‍🤝‍🧑 Volunteers</Link>
          <Link href="/admin/products" className="nav-item">🛒 QA Products</Link>
        </nav>
        <div className="sidebar-footer">
          <Link href="/" className="nav-item back-btn">⬅️ Back to Website</Link>
        </div>
      </aside>
      
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="search-bar">Search...</div>
          <div className="user-profile">Admin Profile</div>
        </header>
        <div className="dashboard-content">
          {children}
        </div>
      </main>
    </div>
  );
}
