// components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Task Master &copy; {new Date().getFullYear()}</p>
        <p>A React learning project</p>
      </div>
    </footer>
  );
};

export default Footer;