import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Buttons({ count, onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button key={i} count={count} onClick={() => onClick(i)}>
          {i}
        </Button>
      ))}
    </p>
  );
}

Buttons.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
