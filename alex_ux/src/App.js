import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navegacion from './components/navegacion';
import { noticias } from './Noticias.json';
import NewsForm from './components/NewsForm'

class App extends Component {
  constructor(){
    super();
    this.state={
      noticias
    }
    this.handleAddNoticia = this.handleAddNoticia.bind(this);
  }
  removeNoticia(index) {
    this.setState({
      noticias: this.state.noticias.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddNoticia(noticia) {
    var datos=JSON.stringify(this.state.noticias);
    localStorage.setItem('datos',datos);
    this.setState({
      noticias: [...this.state.noticias, noticia]
    })
  }

  render(){
    const noticias=this.state.noticias.map((noticia,i)=>{
      if (i<6) {
        return (
          <div className="col-md-6">
            <div className="card mt-4">
              <div className="card-header">
                <h1>{noticia.title}</h1>
              </div>
              <div className="card-body">
                <p>{noticia.Info}</p>
                <p><mark>{noticia.Source}</mark></p>
                <span className="badge badge-pill badge-primary">
                  {noticia.Informed}
                </span>
              </div>
              <div className="card-footer">
                <button className="btn btn-danger" onClick={this.removeNoticia.bind(this, i)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        )
    }
    })
    return (
      <div className="App">
        <Navegacion />
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <NewsForm onAddNoticia={this.handleAddNoticia}></NewsForm>
            </div>
            <div className="col-md-8">
              <div className="row">
                {noticias}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
