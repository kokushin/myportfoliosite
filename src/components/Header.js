import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return(
      <header className="uc-header">
        <h1 className="uc-header-logo"><a href="/">YI</a></h1>
        <div className="uc-header-menu" role="navigation">
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </header>
    );
  }
}

export default Header;