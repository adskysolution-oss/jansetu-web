import React from 'react';
import Link from 'next/link';
import '../dashboard.css';

export default function VolunteerLayout({ children }) {
  return (
    <div className="dashboard-container">
      <aside className="sidebar volunteer-sidebar">
        <div className="sidebar-header">
          <h2><span className="logo-highlight">Jan</span> Setu</h2>
          <p>Volunteer Portal</p>
        </div>
        <nav className="sidebar-nav">
          <Link href="/volunteer" className="nav-item active">🏠 My Dashboard</Link>
          <Link href="/volunteer/alerts" className="nav-item">🚨 Near Me Alerts</Link>
          <Link href="/volunteer/history" className="nav-item">📋 Rescue History</Link>
          <Link href="/volunteer/profile" className="nav-item">👤 Profile Setup</Link>
        </nav>
        <div className="sidebar-footer">
          <Link href="/" className="nav-item back-btn">⬅️ Back to Website</Link>
        </div>
      </aside>
      
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="status-toggle">
            Status: <span className="badge badge-success">Available for Duty</span>
          </div>
          <div className="user-profile">Volunteer Profile</div>
        </header>
        <div className="dashboard-content">
          {children}
        </div>
      </main>
    </div>
  );
}
