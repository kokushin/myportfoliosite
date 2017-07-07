import React, { Component } from 'react';
import Works from '../components/Works';
import Moguo from '../components/Moguo';
import '../styles/Content.css';

class Content extends Component {
  render() {
    return(
      <main className="uc-content">
        <Moguo />
        <Works />
      </main>
    );
  }
}

export default Content;