import React from 'react';

function Greeting({userName}) {
  return (
      <span className='greeting'>
          Hello <b>{userName}</b>!
      </span>
  );
}

export default Greeting;