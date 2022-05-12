import React from 'react';

function Values({ onClick }) {
  return (
    [1, 2, 3, 4, 5].map((increment) => <button type="button" onClick={() => onClick(increment)}>{increment}</button>)
  );
}

export default Values;
