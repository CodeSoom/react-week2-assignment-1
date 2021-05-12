import { func } from 'prop-types';
import React from 'react';

const Buttons = ({ handleClickNumberBtn }) => (
  <>
    {[1, 2, 3, 4, 5].map((number) => (
      <button type="button" onClick={() => handleClickNumberBtn(number)}>
        {number}
      </button>
    ))}
  </>
);

Buttons.propTypes = {
  handleClickNumberBtn: func.isRequired,
};

export default Buttons;
