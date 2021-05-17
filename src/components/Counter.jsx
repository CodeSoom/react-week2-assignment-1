import React from 'react';
import propTypes from 'prop-types';

export default function Counter({ id, count, onClick }) {
  return (
    <button type="button" id={id} key={id} onClick={onClick}>
      {`Click me(${count})`}
    </button>
  );
}

Counter.propTypes = {
  id: propTypes.string.isRequired,
  count: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
};
