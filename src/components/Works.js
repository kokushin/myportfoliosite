import React, { Component } from 'react';
import WorksCard from '../components/WorksCard';
import '../styles/Works.css';

class Works extends Component {
  render() {
    return(
      <section className="works uc-section _center">
        <h2 className="uc-section-title">Works</h2>
        <p>since 2014</p>
        <div className="uc-card-unit">
          <WorksCard />
        </div>
      </section>
    );
  }
}

export default Works;