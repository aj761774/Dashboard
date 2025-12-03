import React from 'react';
import '../styles/header.css';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import { IoMdMenu } from 'react-icons/io';

export default function Header({ dark, setDark, setSidebarOpen }) {
  return (
    <header className="header">
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        <IoMdMenu size={30} />
      </button>

      <input
        type="text"
        placeholder="Search or type command..."
        className="search"
      />

      <div className="header-right">
        <button className="theme-toggle" onClick={() => setDark(!dark)}>
          {dark ? <IoSunnyOutline /> : <IoMoon />}
        </button>

        <div className="profile">
          <div className="avatar" title="Musharof">
            <img
              src="https://themewagon.github.io/tailadmin-vuejs/images/user/owner.jpg"
              alt="user profile"
            />
          </div>
          <span className="user-name">Musharof</span>
        </div>
      </div>
    </header>
  );
}
