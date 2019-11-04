import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { subscribeToTimer } from './api';
import Board from './components/Board'

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, Order) => this.setState({ 
      Order 
    }));
  }
  state = {
    Order: 'no timestamp yet'
  };
  render() {
    return (
      <div className="App">
        This is the Current Order: {this.state.Order.name}
        this is the Current Status: {this.state.Order.event_name}
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