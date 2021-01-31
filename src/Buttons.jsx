import React from 'react';

import Button from './Button';

const arr = [
  1, 2, 3, 4, 5,
];
function Buttons({ number, setNumber }) {
  return (
    <div>
      {arr.map((i) => <Button key={i} plus={i} number={number} setNumber={setNumber} />)}
    </div>
  );
}

export default Buttons;
