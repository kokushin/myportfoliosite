import React, { Component } from 'react';
import WorksCard from '../components/WorksCard';
import '../styles/Works.css';

class Works extends Component {
  render() {
    return(
      <section className="works uc-section _center">
        <h2 className="uc-section-title">Portfolio</h2>
        <p>since 2014</p>
        <div className="uc-card-unit">
          <WorksCard />
        </div>
        <div className="uc-btn-unit">
          <div className="uc-btn"><a href="https://github.com/kokushin?tab=repositories" target="_blank" rel="noopener noreferrer">More works</a></div>
        </div>
      </section>
    );
  }
}

export default Works;