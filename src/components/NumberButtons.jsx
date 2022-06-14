import React from 'react';

export default function NumberButtons({ countUp }) {
  const numbers = [1, 2, 3, 4, 5];

  const onClickButton = (number) => {
    countUp(number);
  };

  return (
    <div>
      {numbers.map((number) => (
        <button type="button" key={number} onClick={() => onClickButton(number)}>{number}</button>
      ))}
    </div>
  );
}
