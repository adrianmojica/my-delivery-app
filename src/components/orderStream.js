import React, { Component } from 'react'
import logo from '../logo.png';

class orderStream extends Component {
    // aqui tengo que crear las cartas y pasarlas a la columna indicada 
    render() {
        console.log(this.props);
        return (
        <div className="order-stream">
            <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="incoming-order">
                Incoming Order: {this.props.OrderName} is being {this.props.OrderEvent}
            </div>
        </div>
        )
    };
}

export default orderStream;