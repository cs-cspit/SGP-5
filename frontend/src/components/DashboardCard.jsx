import React from 'react';
import './DashboardCard.css';

const DashboardCard = ({ icon, title, value }) => {
  return (
    <div className="dashboard-card">
      <div className="icon">{icon}</div>
      <div className="text">
        <p>{title}</p>
        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default DashboardCard;
