import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="cover-image">
          <img src="/a.png" alt="Todo App Cover" />
        </div>
        <h1 className="app-title">Task Master</h1>
        <p className="app-subtitle">Organize your tasks efficiently</p>
      </div>
    </header>
  );
};

export default Header;