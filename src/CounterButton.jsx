import React from 'react';

const CounterButton = ({ value, onClick }) => (
  <button type="button" onClick={onClick}>
    Click me!
    (
    {value}
    )
  </button>
);

export default CounterButton;
