import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {
  state = {
    username : 'Ivan',
    isLoggedIn : !!sessionStorage.getItem('authtoken')
  }
  
  render() {
    return (
    <Router>
      <div className="App cover-container w-100 d-flex h-100 p-3 mx-auto flex-column">
        <Header isLoggedIn={this.state.isLoggedIn} username={this.state.username}></Header>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Home></Home>
          </React.Fragment>
        )}/>
        <Route path="/login" render={props => (
          <React.Fragment>
            <Login></Login>
          </React.Fragment>
        )}/>
        <Route path="/register" render={props => (
          <React.Fragment>
            <Register></Register>
          </React.Fragment>
        )}/>
        <Route path="/shareRecipe" render={props => (
          <React.Fragment>shareRecipe</React.Fragment>
        )}/>

        <Footer></Footer>
      </div>
    </Router>
    )
  }
}

export default App
