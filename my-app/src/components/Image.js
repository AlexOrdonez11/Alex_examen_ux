import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Image extends Component {
  render(){
    return(
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <br/>
      </div>
    )
  }
}

export default Image;
