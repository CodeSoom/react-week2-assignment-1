import React from 'react';

import Button from './Button';

export default function Buttons({ onClickPlusCount }) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((number) => (
        <Button
          type="button"
          onClick={() => onClickPlusCount(number)}
        >
          {number}
        </Button>
      ))}
    </>
  );
}
