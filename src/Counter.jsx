import React from 'react';
import PropTypes from 'prop-types';

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={() => onClick(1)}>
      Click me!
      (
      {count}
      )
    </button>
  );
}

export default Counter;

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
