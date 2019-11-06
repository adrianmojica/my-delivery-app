import React, { Component } from 'react'


class Card extends Component{

  // constructor(props){
  //   super(props);
    
  // }

  render() {
    // console.log("this",this.props);
      return <div className="resp-table-row">
          <div className='table-body-cell'>
            <span>{this.props.ID}</span>
          </div>
          <div className='table-body-cell'>
            <span>{this.props.Name}</span>
          </div>
          <div className='table-body-cell cell-centered'>
            <span className= {`${this.props.Status}`}>{this.props.Status}</span>
          </div>
          <div className='table-body-cell cell-centered'>
            <span>{this.props.Time}</span>
          </div>
          <div className='table-body-cell cell-centered'>
            <span>{this.props.Destination}</span>
          </div>
      </div>
    }
}

export default Card;