import React from 'react';

import SelectedPhoto from './SelectedPhoto';
import UpdatePhotoForm from './UpdatePhotoForm';
import { connect } from 'react-redux';
import { deletePhoto, updateSinglePhoto, toggleShowUpdate } from '../actions';
import styled from 'styled-components';

const Img = styled.img`
    width: 250px;
    height: 125px;
`;
const Ph1 = styled.h1 `
  color: orange;
  text-shadow: 2px 2px black;
`;

class Photo extends React.Component {
  handleDeletePhoto = () => {
    const { id } = this.props.photoSelected;
    this.props.deletePhoto(id);
  };

  handleShowPhoto = photo => {
    this.props.updateSinglePhoto(photo);
  };

  toggleShowUpdate = () => {
    this.props.toggleShowUpdate();
  };
  render() {
    return (
      <div>
        <div>
        {Object.keys(this.props.photoSelected) ? (
          <SelectedPhoto
            handleShowPhoto={this.handleShowPhoto}
            toggleShowUpdate={this.toggleShowUpdate}
            handleDeletePhoto={this.handleDeletePhoto}
            selected={this.props.photoSelected}
          />
        ) : null}
        {this.props.showUpdate ? (
          <UpdatePhotoForm photo={this.props.photoSelected} />
        ) : null}
        {this.props.deletingPhoto ? (
          <img src='https://www.andreasartgallery.com/wp-content/uploads/2018/05/button_PatienceLoading.jpg' alt="loading" />
        ) : null}
        </div>
        <ul>
        <Ph1>Expat List</Ph1>  
          {this.props.all.map(photo => {
            return (
              <button onClick={() => this.handleShowPhoto(photo)} key={photo.id}>
                <Img src={photo.img_url} alt={photo.location} />
                <p><strong><br />{photo.location}<br />{photo.description}</strong></p>
              </button>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletingPhoto: state.deletingPhoto,
    error: state.error,
    showUpdate: state.showUpdate,
    photoSelected: state.photoSelected
  };
};

export default connect(mapStateToProps, {
  deletePhoto,
  updateSinglePhoto,
  toggleShowUpdate
})(Photo);
