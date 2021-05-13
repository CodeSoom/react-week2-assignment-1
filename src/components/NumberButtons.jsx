import React from 'react';
import propTypes from 'prop-types';

function NumberButtons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <p>
      {numbers.map((number) => (
        <button
          type="button"
          id={number}
          key={number}
          onClick={() => { onClick(number); }}
        >
          {number}
        </button>
      ))}
    </p>
  );
}

NumberButtons.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default NumberButtons;
