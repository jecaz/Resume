import React, { Component } from 'react';

class Networks extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.map((net) => {
        return <li key={net.name}>
          <a title={net.name} href={net.url} target="_blank" rel="noopener noreferrer"><i className={net.className}></i></a>
        </li>
      });
    }
    return (
      <div>{networks}</div>
    );
  }
}

export default Networks;