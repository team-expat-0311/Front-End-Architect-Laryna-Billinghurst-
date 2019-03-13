import React from 'react';

import SelectedPhoto from './SelectedPhoto';
import UpdatePhotoForm from './UpdatePhotoForm';
import { connect } from 'react-redux';
import { deletePhoto, updateSinglePhoto, toggleShowUpdate } from '../actions';


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
        <ul>
          {this.props.all.map(photo => {
            return (
              <button onClick={() => this.handleShowPhoto(photo)} key={photo.id}>
                {photo.location}
                {/* <img src={photo.img_url} alt={photo.location} /> */}
              </button>
            );
          })}
        </ul>
        {Object.keys(this.props.photoSelected).length > 0 ? (
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












// function Photo(props) {

//   return (
//     <div>
//       <img src={props.img_url} alt={props.location} />
//       <p>Location:<br />{props.location}</p>
//       <p>Description:<br /> {props.description}</p>
//     </div>
//   );
// };

// export default Photo;