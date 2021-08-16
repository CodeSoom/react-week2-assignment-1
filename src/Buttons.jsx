import React from 'react';

import Button from './Button';

export default function Buttons({ setCount }) {
  const onClick = (number) => setCount((prevCount) => prevCount + number);
  return (
    <>
      {[1, 2, 3, 4, 5].map((number) => <Button onClick={() => onClick(number)}>{number}</Button>)}
    </>
  );
}
