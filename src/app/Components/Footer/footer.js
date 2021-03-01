import React from 'react';
import './style.css';

const Footer = (props) => (
  <footer className="footer">
    <img src="" alt="netflixroulette" />
    <>{props.children}</>
  </footer>
);

export default Footer;
