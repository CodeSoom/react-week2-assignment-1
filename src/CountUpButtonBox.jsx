import React from 'react';

import CountUpButton from './CountUpButton';

export default function CountUpButtonBox({ handleCountUp }) {
  const btnList = [1, 2, 3, 4, 5];
  return (
    <>
      {btnList.map((num) => (
        <CountUpButton key={num} number={num} onClick={() => handleCountUp(num)} />
      ))}
    </>
  );
}
