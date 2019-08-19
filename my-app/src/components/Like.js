import React, { Component } from 'react';
import './Like.css';

class Like extends Component{
  constructor(){
    super();
    this.state={
      likes: 0
    };
    this.Increment=this.Increment.bind(this);
  }
  Increment(){
    this.setState({
      likes: this.state.likes+1
    });
  }
  render(){
    return(
      <div className="right">
        <span className="badge badge-pill badge-success" aling="right">
          {this.state.likes}
        </span>
        <button className="btn btn-primary" onClick={this.Increment.bind()}>
          like
        </button>
      </div>

    )
  }
}
export default Like;
