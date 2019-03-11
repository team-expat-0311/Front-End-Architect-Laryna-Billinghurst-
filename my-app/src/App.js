import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Public from './components/Public';

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
            <Link to="/protected">Start Expat</Link>
          </li>
      </ul>
      <Route path='/public' component={Public} />
      </div>
      </Router>
    );
  }
}

export default App;
