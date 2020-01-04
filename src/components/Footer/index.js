import React from 'react';

import "./index.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
