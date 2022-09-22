import React from 'react';
import Button from './Button';

export default function Buttons({ buttonList, handleClickDirectPlus }) {
  return (
    <p>
      {buttonList.map((i) => (
        <Button key={i} handleClickDirectPlus={handleClickDirectPlus}>
          {i}
        </Button>
      ))}
    </p>
  );
}
