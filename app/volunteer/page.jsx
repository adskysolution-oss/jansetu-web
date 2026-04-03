import React from 'react';

export default function VolunteerDashboard() {
  return (
    <div className="volunteer-dashboard">
      <h1 className="page-title">Volunteer Action Dashboard</h1>
      
      <div className="stats-grid">
        <div className="stat-card alert-card">
          <h3>Emergency Alerts Near You</h3>
          <p className="stat-value text-red">2</p>
          <span className="stat-trend">Respond immediately!</span>
        </div>
        <div className="stat-card">
          <h3>Total Rescues/Helps</h3>
          <p className="stat-value">12</p>
          <span className="stat-trend positive">Great job!</span>
        </div>
        <div className="stat-card">
          <h3>Current Location</h3>
          <p className="stat-value" style={{fontSize: '1.2rem'}}>Bhopal, MP</p>
          <span className="stat-trend">Tracking active</span>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="recent-activity section-card">
          <h2>Active Emergency Pings</h2>
          <table className="activity-table">
            <thead>
              <tr>
                <th>Distance</th>
                <th>Incident Type</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2.4 km away</td>
                <td>Road Accident (Bike)</td>
                <td>Arera Colony, Bhopal</td>
                <td><button className="primary-btn" style={{padding: '5px 15px', fontSize: '14px'}}>Accept</button></td>
              </tr>
              <tr>
                <td>5.1 km away</td>
                <td>Medical Emergency</td>
                <td>MP Nagar, Bhopal</td>
                <td><button className="primary-btn" style={{padding: '5px 15px', fontSize: '14px'}}>Accept</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
