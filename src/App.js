import React, { Component } from 'react';
import './App.scss';
import { subscribeToTimer } from './api';
import Board from './components/Board';
import Stream from './components/orderStream';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, Order) => this.setState({ 
      Order 
    }));
  }
  state = {
    Order: 'no orders yet'
  };
  render() {
    return (
      <div className="App">
        <Stream
          OrderName = {this.state.Order.name}
          OrderEvent = {this.state.Order.event_name}
        />
        <Board 
          OrderID = {this.state.Order.id}
          OrderName = {this.state.Order.name}
          OrderEvent = {this.state.Order.event_name}
          OrderTime = {this.state.Order.sent_at_second}
          OrderDest = {this.state.Order.destination}
        />
        
      </div>  
    );
  }
}

export default App;