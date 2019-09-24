import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigator from './components/Navigator';
import Image from './components/Image';
import Like from './components/Like';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"



// data
import { todos } from './datos.json';
import { todos1 } from './movies.json';
import { todos2 } from './music.json';
import { todos3 } from './nba.json';
import { todos4 } from './futbol.json';
import { todos5 } from './mundo.json';
import { todos6 } from './nutricion.json';
import { todos7 } from './medicina.json';

// subcomponents
//import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    var data=JSON.stringify(this.state.Todos);
    localStorage.setItem('data',data);
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

/*  redigir(link){
    location.href = link;
    onclick={window.location.href = todo.link}
    <l1>
      <p><mark>{todo.img}</mark></p>
    </l1>
  }*/
  /*var express = require('express');
  var cors = require('cors');
  var app = express();
  app.use(cors());*/


  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-3" key={i}>
          <div class="card">
          <div class="card-image">
            <img src = {todo.img}/>
          </div>
          <div className="card-content">
            <p>{todo.titulo}</p>
          </div>
            <div className="card-footer">
            <button type="button" class="btn btn-success" onClick={()=>{window.open(todo.link)}}>Link</button>
              <Like/>
            </div>
          </div>
        </div>
      )
    });
    // RETURN THE COMPONENT
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-10">
            <div className="col-md-12">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
