import React from 'react';

// eslint-disable-next-line react/prop-types
const Buttons = ({ handleClickNumberBtn }) => (
  <>
    {[1, 2, 3, 4, 5].map((number) => (
      <button type="button" onClick={() => handleClickNumberBtn(number)}>
        {number}
      </button>
    ))}
  </>
);

export default Buttons;
