import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return(
      <footer className="uc-footer _dark">
        <div className="uc-footer-menu">
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div className="uc-footer-logo"><cite>YI</cite></div>
        <p>This page was made using <a href="" target="_blank">UNITS</a>.</p>
        <small>&copy; 2017 Yusuke Ishiguro</small>
      </footer>
    );
  }
}

export default Footer;