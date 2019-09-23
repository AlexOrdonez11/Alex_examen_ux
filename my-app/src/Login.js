import React, { Component } from "react"
import firebase from "firebase"
import App from "./App"
import './Login.css'
import { BrowserRouter,Route,Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Image from './components/Image';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


import{TecnologiaF,MoviesF,MusicF,NbaF,FutbolF,MundoF,NutricionF,MedicinaF} from './scraper.js';

/*tecnologia.then(function(response){
  try{
    fs.unlinkSync('datos.json');
    writeIT(response);
  }catch(err){
    writeIT(response);
  }
});*/


firebase.initializeApp({
  apiKey: "AIzaSyAP2u67JMm-_4I2gPBZkJGT5K3gTCo0x9Y",
  authDomain: "my-app-1567052303922.firebaseapp.com"
})

class Login extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }


  render() {
    return (
      <div>
      <Navbar dark expand="md" style={{backgroundColor: '#B2AF27'}}>
        <NavbarBrand href="/">
          <Image />
        </NavbarBrand>
        <NavbarBrand href="/">
          <h1>Noticias</h1>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <h2 style={{margin: '5px 10px'}}>
                  {this.state.isSignedIn ? (
                    <button className="btn btn-danger" onClick={() => firebase.auth().signOut()}>Sign out!</button>
                  ):(
                    <div></div>
                  )}
                </h2>
              </NavItem>
              <NavItem>
                {this.state.isSignedIn ? (
                  <h4 style={{margin: '10px 10px'}}>
                  {firebase.auth().currentUser.displayName}
                  </h4>
                ):(
                  <div> </div>
                )}
              </NavItem>
              <NavItem>
                {this.state.isSignedIn ? (
                  <h2 style={{margin: '5px 5px'}}>
                  <img
                  src={firebase.auth().currentUser.photoURL}
                  width={50}
                  height={50}
                  />
                  </h2>
                ):(
                  <div> </div>
                )}
              </NavItem>
              <NavItem>
                <div style={{margin: '0px 3px'}}>
                <button className="btn btn-success" onClick={TecnologiaF}>Tecnologia</button>
                </div>
              </NavItem>
              <NavItem>
                <div style={{margin: '0px 3px'}}>
                <button className="btn btn-success">Movies</button>
                </div>
              </NavItem>
              <NavItem>
                <div style={{margin: '0px 3px'}}>
                <button className="btn btn-success">Music</button>
                </div>
              </NavItem>
              <NavItem>
                <div style={{margin: '0px 3px'}}>
                <button className="btn btn-success">NBA</button>
                </div>
              </NavItem>
              <NavItem>
                <div style={{margin: '0px 3px'}}>
                <button className="btn btn-success">Football</button>
                </div>
              </NavItem>
              <NavItem>
                <div style={{margin: '0px 3px'}}>
                <button className="btn btn-success">Mundo</button>
                </div>
              </NavItem>
              <NavItem>
                <div style={{margin: '0px 3px'}}>
                <button className="btn btn-success">Nutricion</button>
                </div>
              </NavItem>
              <NavItem>
                <div style={{margin: '0px 3px'}}>
                <button className="btn btn-success">Medicina</button>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {this.state.isSignedIn ? (
          <BrowserRouter>
            <Route path component={App} />
          </BrowserRouter>
        ):(
          <div className="login">
            <div>.</div>
            <div style={{margin: '190px 0px 0px 520px'}}>
              <div className="col-md-6">
                  <div className="card mt-6">
                    <div className="card-title text-center">
                      <h3>Login</h3>
                      </div>
                      <div className="card-body">
                        <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )}
      </div>
    )
  }
}


export default Login;
