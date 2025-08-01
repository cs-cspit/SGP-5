import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import './DashboardPage.css';
import { FaDollarSign, FaUser, FaBuilding } from 'react-icons/fa';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Navbar />
      <div className="dashboard-main">
        <Sidebar />
        <div className="dashboard-content">
          <DashboardCard icon={<FaDollarSign />} title="Monthly Pay" value="₹5,00,000" />
          <DashboardCard icon={<FaUser />} title="Total Employees" value="3" />
          <DashboardCard icon={<FaBuilding />} title="Total Departments" value="5" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
