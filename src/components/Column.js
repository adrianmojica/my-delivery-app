import React, { Component } from 'react'
import Card from '../components/Card'



class Column extends Component {
  

  render() {
      console.log(this.props);
      return (<div className="column- col">
            <div className={`title ${this.props.title}`}>{this.props.title}</div>
              <Card 
              />
            </div>)
  };
}

export default Column;