import React, { Component } from 'react'
import Card from '../components/Card'


class Board extends Component {
   

    constructor(props){
      super(props);
      this.renderTableRows= this.renderTableRows.bind(this);
      this.returnFinalRows= this.returnFinalRows.bind(this);
    }

    renderTableRows(order){
      this.returnFinalRows( order.map(order => (
        <Card
          key = {order.id}
          ID = {order.id}
          Name ={order.name}
          Status ={order.event_name}
          Time = {order.sent_at_second}
          Destination ={order.destination}
        />
      )));
    }

    returnFinalRows(cards){
      console.log(cards);
    }
    
    render() {
        return (
        <div className="main-board flex-grid">
          <div id='resp-table'>
            <div id='resp-table-header'>
              <div className='table-header-cell order-ID'>
                Order ID
              </div>
              <div className='table-header-cell order-name'>
                Order Name
              </div>
              <div className='table-header-cell order-status'>
                Status
              </div>
              <div className='table-header-cell order-time'>
                Time
              </div>
              <div className='table-header-cell order-destination'>
                Destination
              </div>
            </div>
            <div id='resp-table-body'>
              {/* {this.renderTableRows(this.props.Orders)} */}
              { this.returnFinalRows(this.props.Orders) }
            </div>
          </div>
        </div>
        )
    };
}

export default Board;