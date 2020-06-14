import React from 'react';


export default function CounterButton({ handleClickNumberButton }) {
  return (
    <p>
      {
        [1, 2, 3, 4, 5].map((number) => (
          <button type="button" onClick={() => handleClickNumberButton(number)}>
            {number}
          </button>
        ))
      }
    </p>
  );
}
