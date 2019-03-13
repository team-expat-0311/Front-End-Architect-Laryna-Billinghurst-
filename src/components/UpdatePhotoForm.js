import React from 'react';

const UpdatePhotoForm = props => {
  return (
    <form>
      <input placeholder={props.photo.img_url} />
      <input placeholder={props.photo.location} />
      <input placeholder={props.photo.description} />
    </form>
  );
};

export default UpdatePhotoForm;