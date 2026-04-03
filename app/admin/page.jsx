import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1 className="page-title">Admin Dashboard Overview</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-value">12,543</p>
          <span className="stat-trend positive">↑ 12% this week</span>
        </div>
        <div className="stat-card alert-card">
          <h3>Active SOS Alerts</h3>
          <p className="stat-value text-red">4</p>
          <span className="stat-trend">Needs immediate attention</span>
        </div>
        <div className="stat-card">
          <h3>Active Volunteers</h3>
          <p className="stat-value">452</p>
          <span className="stat-trend positive">↑ 5% this week</span>
        </div>
        <div className="stat-card">
          <h3>Total Partners</h3>
          <p className="stat-value">34</p>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="recent-activity section-card">
          <h2>Recent SOS Alerts Activity</h2>
          <table className="activity-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Location</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#SOS-4029</td>
                <td>Rahul Sharma</td>
                <td>Indore, MP</td>
                <td><span className="badge badge-danger">Unresolved</span></td>
                <td>10 mins ago</td>
              </tr>
              <tr>
                <td>#SOS-4028</td>
                <td>Priya Singh</td>
                <td>Bhopal, MP</td>
                <td><span className="badge badge-warning">En-route</span></td>
                <td>25 mins ago</td>
              </tr>
              <tr>
                <td>#SOS-4027</td>
                <td>Amit Kumar</td>
                <td>Ujjain, MP</td>
                <td><span className="badge badge-success">Resolved</span></td>
                <td>1 hour ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
