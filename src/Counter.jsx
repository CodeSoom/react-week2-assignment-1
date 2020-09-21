import React from 'react';

const CounterButton = ({ count, onClick }) => (
  <button type="button" onClick={() => { onClick({ difference: 1 }); }}>
    Click me! (
    {count}
    )
  </button>
);

export default CounterButton;
