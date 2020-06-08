import React from 'react';
import Button from '../Button';

function Counter({ buttons, count, onClick }) {
  return (
    <>
      <Button onClick={() => onClick(1)}>
        Click me! (
        {count}
        )
      </Button>
      <br />
      {buttons.map((n) => <Button key={n} onClick={() => onClick(n)}>{n}</Button>)}
    </>
  );
}

export default Counter;
