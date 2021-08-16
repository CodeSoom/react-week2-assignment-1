import React from 'react';
import PropTypes from 'prop-types';
import NumberButton from './NumberButton';

function NumberButtons({ values }) {
  return (
    <p>
      {
        values.map((value) => <NumberButton key={value}>{value}</NumberButton>)
      }
    </p>
  );
}

NumberButtons.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default NumberButtons;
