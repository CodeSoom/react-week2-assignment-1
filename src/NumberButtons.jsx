import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const BUTTON_NUMBERS = [1, 2, 3, 4, 5];

export default function NumberButtons({ setCount }) {
  const onClick = (number) => setCount((prevCount) => prevCount + number);
  return (
    <p>
      {BUTTON_NUMBERS.map((number) => <Button onClick={() => onClick(number)}>{number}</Button>)}
    </p>
  );
}

NumberButtons.propTypes = {
  setCount: PropTypes.func.isRequired,
};
