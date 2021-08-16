import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Buttons({ labels }) {
  return (
    <p>
      {
        labels.map((label) => <Button key={label}>{label}</Button>)
      }
    </p>
  );
}

Buttons.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Buttons;
