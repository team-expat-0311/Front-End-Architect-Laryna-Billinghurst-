import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Protected from './components/Protected';
import Public from './components/Public';

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
      <Route path='/public' component={Public} />
      </div>
      </Router>
    );
  }
}

export default App;
