import React from 'react';
import propTypes from 'prop-types';

export default function Button({ id, onClick }) {
  return (
    <button type="button" id={id} key={id} onClick={onClick}>
      {id}
    </button>
  );
}

Button.propTypes = {
  id: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
