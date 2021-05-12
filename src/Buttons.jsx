import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function Buttons({ onClickNumber }) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <p>
      {numbers.map((number) => (
        <Button value={number} onClickNumber={onClickNumber} />
      ))}
    </p>
  );
}

Buttons.propTypes = {
  onClickNumber: PropTypes.func.isRequired,
};

export default Buttons;
