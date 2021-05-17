import React from 'react';
import propTypes from 'prop-types';

import Button from './Button';

export default function NumberButtons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <p>
      {numbers.map((number) => (
        <Button
          id={number}
          onClick={() => { onClick(number); }}
        />
      ))}
    </p>
  );
}

NumberButtons.propTypes = {
  onClick: propTypes.func.isRequired,
};
