import React from 'react';
import PropTypes from 'prop-types';

export default function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={() => onClick(1)}>
      Click me!
      (
      {count}
      )
    </button>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
