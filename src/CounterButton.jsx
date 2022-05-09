import React from 'react';

const CounterButton = ({ handleClick }) => {
  [1, 2, 3, 4, 5].map((i) => (
    <button type="button" key={i} value={i} onClick={handleClick}>
      {i}
    </button>
  ));
};
export default CounterButton;
