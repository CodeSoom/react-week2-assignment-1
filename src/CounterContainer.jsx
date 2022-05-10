import React from 'react';
import NumberCounter from './NumberCounter';

const CounterContainer = ({ setCount }) => {
  const onCountClick = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setCount(Number(value));
  };
  return (
    <div>
      <NumberCounter handleCountClick={onCountClick} />
    </div>
  );
};

export default CounterContainer;
