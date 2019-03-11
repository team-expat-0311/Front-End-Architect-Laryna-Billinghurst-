import React from 'react';

function Friend(props) {

  return (
    <div>
      <h3>{props.name}</h3>
      <strong>{props.email}</strong>
      <p>{props.age}</p>
    </div>
  );
};

export default Friend;