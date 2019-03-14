import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPhoto } from '../actions';

class PhotoForm extends Component {
  state = {
    img_url: '',
    location: '',
    description: ''
  };
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddPhoto = _ => {
    const { img_url, location, description } = this.state;
    this.props.addPhoto(localStorage.getItem('user_id'),{img_url, location, description });
    this.setState({ img_url: '', location: '', description: '' });
  };

  render() {
    return (
      <form>
        <input
          className="input"
          value={this.state.img_url}
          name="img_url"
          type="text"
          placeholder="Image URL"
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
        <input
          className="input"
          value={this.state.description}
          name="description"
          type="text"
          placeholder="Description"
          onChange={this.handleInputChange}
        />
        <br />
        <button onClick={() => this.handleAddPhoto()} type="button">
          Add New Expat
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    addingPhoto: state.addingPhoto
  };
};

export default connect(mapStateToProps, { addPhoto })(PhotoForm);