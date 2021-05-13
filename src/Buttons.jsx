import React from 'react';

export default ({ handleClickNumber }) => (
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
