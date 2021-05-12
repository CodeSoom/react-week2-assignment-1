/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ numbers, onClick }) {
  return (
    <p>
      {
        numbers.map((number) => (
          <button
            type="button"
            id={number}
            key={number}
            onClick={() => {
              onClick(number);
            }}
          >
            {number}
          </button>
        ))
      }
    </p>
  );
}

Buttons.prototype = {
  number: PropTypes.array,
  count: PropTypes.number,
  onClick: PropTypes.func,
};

export default Buttons;
