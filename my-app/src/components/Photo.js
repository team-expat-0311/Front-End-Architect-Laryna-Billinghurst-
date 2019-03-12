import React from 'react';

function Friend(props) {

  return (
    <div>
      <img src={props.img_url} alt={props.location} />
    </div>
  );
};

export default Friend;