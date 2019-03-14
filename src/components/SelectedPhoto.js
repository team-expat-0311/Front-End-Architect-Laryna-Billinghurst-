import React from 'react';

export default function SelectedPhoto(props) {
  return (
    <div> 
      <img src={props.selected.img_url} alt={props.selected.location} />
      <br />
      <button onClick={() => props.handleShowPhoto({})}> Close Selected Expat </button>
      <h3>Expat Editor: Select an Expat</h3> 
      <div>{props.selected.location}</div>
      <div>{props.selected.description}</div>
      <button onClick={() => props.handleDeletePhoto()}>{`Delete ${
        props.selected.img_url
      }`}</button>
      <button onClick={() => props.toggleShowUpdate()}>{`Update ${
        props.selected.img_url
      }`}</button>
    </div>
  );
};
