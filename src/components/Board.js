import React, { Component } from 'react'
import Card from '../components/Card'


class Board extends Component {
   

    constructor(props){
      super(props);
      this.renderTableRows= this.renderTableRows.bind(this);
      this.filterBy = this.filterBy.bind(this);
    }

    filterBy(event,order){
      console.log('hey hey',order,event);
      var filtered = [];
      for (var i = 0; i < order.length; i++) {
          if (order[i].event_name === event) {
              filtered.push(order[i]);
          }
          if (order[i].event_name !== event){
            filtered.splice(i,1);
          }
      }
      return filtered.map(order => (
        <Card
          key = {order.id}
          ID = {order.id}
          Name ={order.name}
          Status ={order.event_name}
          Time = {order.sent_at_second}
          Destination ={order.destination}
        />
      ));
    }

    renderTableRows(){
      let order = this.props.Orders;
      // console.log(this.props);
      if (this.props.Filter !== "history" ) {
        this.filterBy(order,this.props.Filter);
      } else {
        //massage data
          if (order.length > 2 ) {
            let element  = order[order.length-1];
            for(var i = 0; i < order.length; i++) {
                if (order[i].id === element.id) {
                    order[i]=element;
                    
                }
            }
          }
          return order.map(order => (
            <Card
              // key = {order.id}
              ID = {order.id}
              Name ={order.name}
              Status ={order.event_name}
              Time = {order.sent_at_second}
              Destination ={order.destination}
            />
          ));
        }
      }
      
  

   
    
    render() {
        return (
          <div>
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
                { this.renderTableRows(this.props)}
              </div>
            </div>
          </div>
          </div>
        )
    };
}

export default Board;

