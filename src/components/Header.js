import React, { Component } from 'react';
import ReactModal from 'react-modal';
import '../styles/Header.css';

ReactModal.setAppElement('#root');

class Header extends Component {
  render() {
    return(
      <header className="uc-header">
        <h1 className="uc-header-logo"><a href="/">YI</a></h1>
        <div className="uc-header-menu" role="navigation">
          <a href="" onClick={this.props.handleOpenModal}>About</a>
          <a href="mailto:mail@kokush.in">Contact</a>
        </div>
      </header>
    );
  }
}

export default Header;