import React from 'react';
import Button from './Button.jsx';

const arr = [
  1, 2, 3, 4, 5,
];
function ButtonGroup({ num, setNum }) {
  return (
    <div>
      {arr.map((i) => <Button key={i} plus={i} num={num} setNum={setNum} />)}
    </div>
  );
}

export default ButtonGroup;
