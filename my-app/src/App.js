import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Public from './components/Public';
import PrivateRoute from './components/PrivateRoute';
import Protected from './components/Protected';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <h1>Welcome To Expat</h1>
        <ul>
          <li>
            <Link to="/public">Register New Account</Link>
          </li>
          <li>
            <Link to="/protected">Login Expat</Link>
          </li>
      </ul>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/protected" component={Protected} />
      <Route path='/public' component={Public} />
      </div>
      </Router>
    );
  }
}

export default App;
