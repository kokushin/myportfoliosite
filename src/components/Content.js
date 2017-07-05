import React, { Component } from 'react';
import Works from '../components/Works';
import '../styles/Content.css';

class Content extends Component {
  render() {
    return(
      <main className="uc-content content">
        <Works />
      </main>
    );
  }
}

export default Content;