import React from 'react';
import NumberCounter from './NumberCounter';

const CounterContainer = ({ setCount }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setCount((previousCount) => previousCount + Number(value));
  };
  return (
    <div>
      <NumberCounter handleClick={handleClick} />
    </div>
  );
};

export default CounterContainer;
