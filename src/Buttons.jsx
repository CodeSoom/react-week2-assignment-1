import React from 'react';

// eslint-disable-next-line react/prop-types
const Buttons = ({ onHandleClickNumberBtn }) => (
  <>
    {[1, 2, 3, 4, 5].map((number) => (
      <button type="button" onClick={() => onHandleClickNumberBtn(number)}>
        {number}
      </button>
    ))}
  </>
);

export default Buttons;
