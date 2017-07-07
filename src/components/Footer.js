import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return(
      <footer className="uc-footer _dark">
        <div className="uc-footer-menu">
          <a href="https://twitter.com/kokushing" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.facebook.com/yusuke.1496" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://github.com/kokushin" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/kokushin_/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="uc-footer-logo"><cite>YI</cite></div>
        <p>This page was made using <a href="" target="_blank">UNITS</a>.</p>
        <small>&copy; 2017 Yusuke Ishiguro</small>
      </footer>
    );
  }
}

export default Footer;