import React, { useState } from 'react';

import Button from './Button';

export default function Counter() {
  const style = { marginBottom: '10px' };

  const [state, setState] = useState({
    count: 0,
    numbers: [1, 2, 3, 4, 5],
  });

  const { count, numbers } = state;

  const handleClickButton = (num) => {
    setState({
      ...state,
      count: count + num,
    });
  };

  return (
    <div>
      <p style={style}>Counter</p>
      <div style={style}>
        <Button
          value={`Click me! (${count})`}
          onClick={() => {
            handleClickButton(1);
          }}
        />
      </div>
      <div style={style}>
        {numbers.map((i) => (
          <Button
            key={i}
            value={i}
            onClick={() => {
              handleClickButton(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}
