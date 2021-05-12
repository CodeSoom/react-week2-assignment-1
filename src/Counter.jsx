import React from 'react';
import PropTypes from 'prop-types';

export default function Counter({ count, onClick }) {
  return (
    <div>
      <button type="button" onClick={onClick}>
        Click me!
        (
        {count}
        )
      </button>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
