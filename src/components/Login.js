import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { login } from '../actions'

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
      e.preventDefault();
      this.props.login(this.state.credentials);
  };
  

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default connect( null, { login })(Login);
