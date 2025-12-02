import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './styles/global.css';
import './styles/animations.css';

export default function App() {
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={dark ? 'dark' : 'light'}>
      <div className="layout">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="main">
          <Header
            dark={dark}
            setDark={setDark}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          <Dashboard />
        </div>
      </div>
    </div>
  );
}
