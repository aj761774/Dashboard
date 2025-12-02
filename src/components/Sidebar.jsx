import React, { useEffect } from 'react';
import '../styles/sidebar.css';
import { IoMdClose } from 'react-icons/io';

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  // Auto close sidebar on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h1 className="logo">TailAdmin</h1>

        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          <IoMdClose size={30} />
        </button>
      </div>

      <div className="menu-section-title">MENU</div>

      <nav className="menu">
        <div className="menu-item active">Dashboard</div>
        <div className="menu-item">Ecommerce</div>
        <div className="menu-item">Calendar</div>
        <div className="menu-item">User Profile</div>
        <div className="menu-item">Forms</div>
        <div className="menu-item">Tables</div>
        <div className="menu-item">Pages</div>
      </nav>

      <div className="menu-section-title">OTHERS</div>

      <nav className="menu">
        <div className="menu-item">Charts</div>
        <div className="menu-item">UI Elements</div>
        <div className="menu-item">Authentication</div>
      </nav>
    </aside>
  );
}
