import React from 'react';

function Values({ setValue }) {
  function handleClick(increment) {
    setValue((prev) => prev + increment);
  }

  return (
    [1, 2, 3, 4, 5].map((increment) => <button type="button" onClick={() => handleClick(increment)}>{increment}</button>)
  );
}

export default Values;
