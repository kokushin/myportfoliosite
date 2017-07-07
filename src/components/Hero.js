import React, { Component } from 'react';
import '../styles/Hero.css';

class Hero extends Component {
  render() {
    const heroImageSrc = {
      backgroundImage: `url(https://source.unsplash.com/random)`,
    };
    return(
      <div className="uc-hero">
        <div className="uc-hero-bg" style={heroImageSrc}></div>
        <div className="uc-hero-title">Yusuke Ishiguro</div>
        <p>Web developer</p>
      </div>
    );
  }
}

export default Hero;