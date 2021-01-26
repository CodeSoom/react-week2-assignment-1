import React from 'react';
import AddOneButton from './AddOneButton';
import NumberButton from './NumberButton';

function NumberPage({ onClick, numberToShow }) {
  return (
    <div className="numbers-container">
      <AddOneButton
        onClick={() => {
          onClick(1);
        }}
        numberToShow={numberToShow}
      />
      <br />
      {[1, 2, 3, 4, 5].map((numberToAdd) => (
        <NumberButton
          numberToAdd={numberToAdd}
          onClick={() => {
            onClick(numberToAdd);
          }}
          key={numberToAdd}
        />
      ))}
    </div>
  );
}

export default NumberPage;
