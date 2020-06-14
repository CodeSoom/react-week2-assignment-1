import React from 'react';
import Buttons from './Buttons';

function NumberButton({ onClick }) {
  return (
    <p>
      {
        [1, 2, 3, 4, 5].map((i) => (
          <Buttons onClick={onClick} key={i} buttonValue={i} />
        ))
      }
    </p>
  );
}

export default NumberButton;
