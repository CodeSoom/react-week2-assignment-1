import React, { useState } from 'react';

import CounterButton from './CounterButton';
import CounterButtonWithNumber from './CounterButtonWithNumber';

function Counter() {
  const [state, setState] = useState({
    count: 0,
  });
  const numbers = [1, 2, 3, 4, 5];
  const { count } = state;

  const handleClick = () => {
    setState({
      count: count + 1,
    });
  };

  const handleClickWithNumber = (number) => {
    setState({
      count: count + number,
    });
  };

  return (
    <>
      <p>Counter</p>
      <p>
        <CounterButton
          count={count}
          onClick={handleClick}
        />
      </p>
      <p>
        {numbers.map((number) => (
          <CounterButtonWithNumber
            key={number}
            number={number}
            onClick={() => handleClickWithNumber(number)}
          />
        ))}
      </p>
    </>
  );
}

export default Counter;
