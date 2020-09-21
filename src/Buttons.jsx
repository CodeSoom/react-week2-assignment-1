import React from 'react';

function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((number) => (
        <button type="button" key={number} onClick={() => onClick(number)}>{number}</button>
      ))}
    </p>
  );
}


export default Buttons;
