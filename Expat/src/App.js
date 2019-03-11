import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Protected from './components/Protected';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <h1>Welcome to Expat</h1>
      <ul>
          <li>
            <Link to="/public">Register New Account</Link>
          </li>
          <li>
            <Link to="/protected">Start Expat</Link>
          </li>
      </ul>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/protected" component={Protected} />
      </div>
      </Router>
    );
  }
}

export default App;
