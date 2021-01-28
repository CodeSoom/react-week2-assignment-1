import React from 'react';

function Buttons({ handleClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <button type="button" key={i} onClick={handleClick(i)}>
          {i}
        </button>
      ))}
    </p>
  );
}

export default Buttons;
