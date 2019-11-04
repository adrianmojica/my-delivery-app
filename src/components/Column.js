import React, { Component } from 'react'
import Card from '../components/Card'


export default class Column extends Component {
  render() {
      return <div className="column- col">
            <div>Title</div>
              <Card/>
              <Card/>
              <Card/>
            </div>
     
  }
}