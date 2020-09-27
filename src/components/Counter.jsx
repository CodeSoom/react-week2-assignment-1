import React from 'react';


const Counter = ({ count, onClick }) => (
  <button type="button" onClick={() => onClick()}>
    Click me!
    (
    { count }
    )
  </button>
);

export default Counter;
