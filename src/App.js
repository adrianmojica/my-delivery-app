import React, { Component } from 'react';
import './App.scss';
import { subscribeToTimer } from './api';
import Board from './components/Board';
import Stream from './components/orderStream';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, Order) => this.setState(state => ({
      Orders: [...state.Orders, Order] 
    })));
  }
  state = {
    Orders: []
  };
  render() {
    const { Orders } = this.state;
    const { name, event_name } = Orders[Orders.length - 1] || {}; // get the names from the laster order - or undefined if none
    return (
      <div className="App">
        <Stream/>
        <Board 
         Orders = {this.state.Orders}
        />
        
      </div>  
    );
  }
}

export default App;