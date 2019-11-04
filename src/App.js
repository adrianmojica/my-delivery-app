import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
        <Board />
      </div>  
    );
  }
}

export default App;