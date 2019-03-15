import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUser } from '../actions';

class NewUser extends Component {
  state = {
    username: '',
    password: '',
    name: '',
    role: '',
    age: '',
    location: ''
  };
  
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddUser = _ => {
    const { username, password, name, role, age, location } = this.state;
    this.props.addUser({ username, password, name, role, age, location });
    this.setState({ username: '', password: '', name: '', role: '', age: '', location: '' });
    alert('User Created');
  };

  render() {
    return (
      <form>
        <input
          className="input"
          value={this.state.username}
          name="username"
          type="text"
          placeholder="Username"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          className="input"
          value={this.state.password}
          name="password"
          type="text"
          placeholder="Password"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          className="input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <br />
        {/* select option for setting user role */}
        <select value={this.state.value} name="role" onChange={this.handleInputChange}>
            <option value='expat'>Expat</option>
            <option value='viewer'>Viewer</option>
        </select>
        <br />
        <input
          className="input"
          value={this.state.age}
          name="age"
          type="number"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          className="input"
          value={this.state.location}
          name="location"
          type="text"
          placeholder="Location"
          onChange={this.handleInputChange}
        />
        <br />
        <button onClick={() => this.handleAddUser()} type="button">
          Create New User
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingUser: state.addingUser,
    error: state.error
  };
};

export default connect(mapStateToProps, { addUser })(NewUser);