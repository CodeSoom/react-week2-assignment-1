import React from 'react';
import PropTypes from 'prop-types';

function CountButton({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me!
      (
      {count}
      )
    </button>
  );
}

CountButton.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CountButton;
