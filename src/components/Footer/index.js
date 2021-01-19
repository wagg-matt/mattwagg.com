import React from 'react';

import "./index.css";

const Footer = () => (
  <footer className="footer">
    <p className="footer__inner">
      Matt Wagg © {new Date().getFullYear()}
    </p>
  </footer>
)

export default Footer
