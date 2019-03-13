import React from 'react';

export default function SelectedPhoto(props) {
  return (
    <div>
      <img src={props.selected.img_url} alt={props.selected.location} />
      <span onClick={() => props.handleShowPhoto({})}> X </span>
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