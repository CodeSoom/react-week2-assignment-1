import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function NumberPad({ numbers, onClick }) {
  return (
    <div>
      {numbers.map((i) => (
        <Button key={i} onClick={() => onClick(i)}>
          {`${i}`}
        </Button>
      ))}
    </div>
  );
}

NumberPad.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NumberPad;
