import React from 'react';

import CountUpButton from './Button';

export default function CountUpButtonBox({ onClick }) {
  const btnList = [1, 2, 3, 4, 5];
  return (
    <div>
      {btnList.map((number) => (
        <CountUpButton key={number} number={number} onClick={onClick} />
      ))}
    </div>
  );
}
