import React from 'react';
import './Sidebar.css';
import {
  FaTachometerAlt,
  FaUser,
  FaCalendarCheck,
  FaCalendarAlt,
  FaBuilding,
  FaDollarSign,
} from 'react-icons/fa';

const Sidebar = () => {
  const items = [
    { icon: <FaTachometerAlt />, label: 'Dashboard', active: true },
    { icon: <FaUser />, label: 'Employees' },
    { icon: <FaCalendarCheck />, label: 'Attendance' },
    { icon: <FaCalendarAlt />, label: 'Leave Status' },
    { icon: <FaBuilding />, label: 'Departments' },
    { icon: <FaDollarSign />, label: 'Salary' },
  ];

  return (
    <div className="sidebar">
      {items.map((item, i) => (
        <div
          key={i}
          className={`sidebar-item ${item.active ? 'active' : ''}`}
        >
          <div className="sidebar-icon">{item.icon}</div>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
