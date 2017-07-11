import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return(
      <footer className="uc-footer">
        <div className="uc-footer-menu">
          <a href="" onClick={this.props.handleOpenModal}>About</a>
          <a href="https://twitter.com/kokushing" target="_blank">Twitter</a>
          <a href="https://www.facebook.com/yusuke.1496" target="_blank">Facebook</a>
          <a href="https://github.com/kokushin" target="_blank">GitHub</a>
          <a href="https://www.instagram.com/kokushin_/" target="_blank">Instagram</a>
        </div>
        <div className="uc-footer-logo"><cite>YI</cite></div>
        <small>&copy; 2017 Yusuke Ishiguro</small>
      </footer>
    );
  }
}

export default Footer;