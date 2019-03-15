import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
//components
import Login from './components/Login';
import Public from './components/Public';
import PrivateRoute from './components/PrivateRoute';
import Protected from './components/Protected';
//in style component
const Pdiv = styled.div `
  background-color: rgba(255, 0, 0, 0.1);
  margin: auto;
  padding: 20px;
`;
const Odiv = styled.div `
  background-color: rgba(255, 0, 0, 0.5);
  padding: 30px;
  font-size: 1em;
`;
//wrapped div with router for react-router, nice way to reduce page loading
class App extends Component {
  render() {
    return (
      <Router>
      <Pdiv className="App">
        <Odiv>
          <h1>Welcome To Expat</h1>
          {/* two links both with different permissions */}
          <Link to="/public">Register New Account</Link>
          <br />
          <NavLink exact to="/protected">Enter Expat</NavLink>
        </Odiv>
        {/* if one tries to go into the pricate route protected, it will be intercepted by login method  direct to login.js */}
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={Protected} />
        <Route path='/public' component={Public} />
      </Pdiv>
      </Router>
    );
  }
}

export default App;
