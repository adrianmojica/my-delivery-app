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

  showBoard(board){
    let a = document.getElementsByClassName('history-board')[0];
    let b = document.getElementsByClassName('created-board')[0];
    let c = document.getElementsByClassName('cooked-board')[0];
    console.log(a);
    console.log(b);
    console.log(c);

    if (board ==="history") {
      console.log(board);
      a.classList.add('show');
      a.classList.remove("hidden");
      b.classList.add('hidden');
      b.classList.remove("show");
      c.classList.add('hidden');
      c.classList.remove("show");
    }
    if (board === "created") {
      console.log(board);
      a.classList.remove("show");
      a.classList.add('hidden');
      b.classList.remove("hidden");
      b.classList.add('show');
      c.classList.add('hidden');
      c.classList.remove("show");
    }

    if (board === "cooked") {
      console.log(board);
      a.classList.add('hidden');
      a.classList.remove("show");
      b.classList.add('hidden');
      b.classList.remove("show");
      c.classList.add('show');
      c.classList.remove("hidden");
    }
  }

  state = {
    Orders: []
  };
  render() {
    const { Orders } = this.state;
    return (
      <div className="App">
        <Stream/>
        <div className="filters">
            <div>
              <button className="history" href="#" onClick={() => { this.showBoard("history")}}>
                History
              </button>
            </div>
            <div>
              <button className="created" href="#" onClick={() => { this.showBoard("created")}}>
                filter By Cooking
              </button>
            </div>
            <div>
              <button className="cooked" href="#" onClick={() => { this.showBoard("cooked")}}>
                filter By Cooked
              </button>
            </div>
          </div>
        <div className="history-board">
          <Board 
          Filter ={'history'}
          Orders = {Orders}
          />
        </div>
        <div className="created-board hidden">
          <Board 
          Filter = {'Created-history'}
          Orders = {Orders}
          />
        </div>
        <div className="cooked-board hidden">
          <Board 
            Filter = {'Cooked-history'}
            Orders = {Orders}
          />
        </div>
      </div>  
    );
  }
}

export default App;