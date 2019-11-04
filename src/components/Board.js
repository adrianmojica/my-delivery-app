import React, { Component } from 'react'
import Column from '../components/Column'

export default class Board extends Component {
    render() {
        return <div className="main-board flex-grid">
            <Column /> 
            <Column /> 
            <Column /> 
            <Column /> 
            <Column /> 
        </div>
      }
}