import React from 'react';

export default function PartnerDashboard() {
  return (
    <div className="partner-dashboard">
      <h1 className="page-title">Hello, State Partner!</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total QR Sold</h3>
          <p className="stat-value">5,430</p>
          <span className="stat-trend positive">Monthly Goal: 75% completed</span>
        </div>
        <div className="stat-card">
          <h3>Total Active QRs</h3>
          <p className="stat-value">4,921</p>
          <span className="stat-trend positive">↑ 210 this week</span>
        </div>
        <div className="stat-card">
          <h3>Total Earnings</h3>
          <p className="stat-value text-green">₹1,45,200</p>
          <span className="stat-trend">Unpaid Payouts: ₹12,000</span>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="recent-activity section-card">
          <h2>Recent QR Activations in your region</h2>
          <table className="activity-table">
            <thead>
              <tr>
                <th>QR ID</th>
                <th>Product Type</th>
                <th>District</th>
                <th>Activation Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JS-CAR-84092</td>
                <td>Car Safety QR</td>
                <td>Bhopal</td>
                <td>Today, 10:30 AM</td>
              </tr>
              <tr>
                <td>JS-BIK-12903</td>
                <td>Bike Safety QR</td>
                <td>Indore</td>
                <td>Today, 09:15 AM</td>
              </tr>
              <tr>
                <td>JS-HLM-84930</td>
                <td>Helmet Safety QR</td>
                <td>Ujjain</td>
                <td>Yesterday</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
