import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export default function NumbersPad({ numbers, onClick }) {
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

NumbersPad.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired,
};
