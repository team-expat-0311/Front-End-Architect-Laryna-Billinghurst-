import React from 'react';

function Friend(props) {

  return (
    <div>
      <img src={props.img_url} alt={props.location} />
      <p>Location:<br />{props.location}</p>
      <p>Description:<br /> {props.description}</p>
    </div>
  );
};

export default Friend;