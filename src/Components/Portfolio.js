import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var portfolio = this.props.data.projects.map((project) => {
        var imageUrl = 'images/portfolio/' + project.image;
        return <div key={project.title} className="columns portfolio-item" style={{margin: 0, padding: 0}}>
          <div className="item-wrap">
            <a href={project.url} title={project.title} target="_blank">
              <img alt="" src={imageUrl} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.title}</h5>
                  <div id="description" style={{fontSize: 14 + 'px'}}>{project.category}
                    <div style={{margin: '10px 0'}}>{project.description}</div>
                    <div className="categories"><i className="fa fa-tag"></i>{project.tags}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      });
    }
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {portfolio}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
