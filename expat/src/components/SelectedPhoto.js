import React from 'react';
import styled from 'styled-components';
//styling
const Pdiv = styled.div `
  background-color: blue;
  margin: auto;
  padding: 30px;
  color: silver;
`;
const Ph3 = styled.h1 `
  color: green;
  text-shadow: 2px 2px pink;
`;
const Pimg = styled.img `
  width: 100%
`;

//object wll prop through to a singular instance
export default function SelectedPhoto(props) {
  return (
    <Pdiv> 
      <Pimg src={props.selected.img_url} alt={props.selected.location} />
      <br />
      <button onClick={() => props.handleShowPhoto({})}> Close Selected Expat </button>
      <Ph3>Expat Editor: Select an Expat</Ph3> 
      <div>{props.selected.location}</div>
      <div>{props.selected.description}</div>
      <button onClick={() => props.handleDeletePhoto()}>{`Delete ${
        props.selected.img_url
      }`}</button>
      <button onClick={() => props.toggleShowUpdate()}>{`Update ${
        props.selected.img_url
      }`}</button>
    </Pdiv>
  );
};
