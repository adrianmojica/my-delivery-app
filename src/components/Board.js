import React, { Component } from 'react'
import Column from '../components/Column'

class Board extends Component {
    // aqui tengo que crear las cartas y pasarlas a la columna indicada 
    render() {
        return (
        <div className="main-board flex-grid">
            <Column 
             title = "Created"
            /> 
            <Column 
            title = "Cooked"
            /> 
            <Column 
            title = "Cancelled"
            /> 
            <Column 
            title = "With Driver"
            /> 
            <Column 
            title = "Delivered"
            /> 
        </div>
        )
    };
}

export default Board;