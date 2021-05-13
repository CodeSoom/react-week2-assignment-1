import { func } from 'prop-types';
import React from 'react';

const Buttons = ({ handleClickNumber }) => (
  <>
    {[1, 2, 3, 4, 5].map((number) => (
      <button
        type="button"
        onClick={() => handleClickNumber(number)}
      >
        {number}
      </button>
    ))}
  </>
);

Buttons.propTypes = {
  handleClickNumber: func.isRequired,
};

export default Buttons;
