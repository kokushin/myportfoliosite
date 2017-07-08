import React, { Component } from 'react';
import '../styles/Moguo.css';

class Moguo extends Component {
  render() {
    return(
      <div className="uc-moguo">
        <a href="https://codepen.io/kokushin/pen/mmQORR" target="_blank">
          <div className="uc-moguo-eye _left"></div>
          <div className="uc-moguo-eye _right"></div>
          <div className="uc-moguo-mouth">
            　<div className="uc-moguo-tongue">
              <span></span>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Moguo;