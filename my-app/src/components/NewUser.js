import React, { Component } from 'react';
import { connect } from 'react-redux';


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
  };

//   {
//     "username": "test2",
// 	"password": "test",
// 	"name": "dan",
// 	"role": "viewer",
// 	"age": 30,
// 	"location": "Tokyo"
// }

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
        <input
          className="input"
          value={this.state.password}
          name="password"
          type="text"
          placeholder="Password"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.role}
          name="role"
          type="text"
          placeholder="Role"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.location}
          name="location"
          type="text"
          placeholder="Location"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddUser()} type="button">
          Create New User
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps, {})(NewUser);