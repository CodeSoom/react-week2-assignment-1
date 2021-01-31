import React from 'react';

import Button from './Button';

const arr = [
  1, 2, 3, 4, 5,
];
function Buttons({ onClick }) {
  return (
    <div>
      {arr.map((i) => <Button key={i} onClick={() => onClick(i)}>{i}</Button>)}
    </div>
  );
}

export default Buttons;
