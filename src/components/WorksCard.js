import React, { Component } from 'react';
import axios from 'axios';
import '../styles/WorksCard.css';

class WorksCard extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  loadWorksFromServer() {
    axios.get('/api/data.json')
      .then((res) => {
        this.setState({data: res.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadWorksFromServer();
  }

  render() {
    const data = this.state.data;
    return(
      <div className="uc-grid _small-col-full _medium-col-2 _col-3 _gutter">
        {data && data.works && data.works.map((item, i) =>
          <div key={i} className="uc-grid-cell">
            <Card image={item.image} title={item.title} link={item.link} text={item.text} tag={item.tag} />
          </div>
        )}
      </div>
    );
  }
}

const Card = ({image, title, link, text, tag}) => (
  <article className="uc-card _banner">
    <a href={link} target="_blank">
      <div className="uc-card-image" style={{backgroundImage: `url(${image})`}}></div>
      <h3 className="uc-card-title">{title}</h3>
      <p>{text}</p>
      <p className="works-dev-tag">{tag}</p>
    </a>
  </article>
);

export default WorksCard;