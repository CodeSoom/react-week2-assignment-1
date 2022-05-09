import React from 'react';

const CounterButtons = ({ setCount }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setCount((previousCount) => previousCount + Number(value));
  };
  return (
    <div>
      {[1, 2, 3, 4, 5].map((i) => (
        <button type="button" key={i} value={i} onClick={handleClick}>
          {i}
        </button>
      ))}
    </div>
  );
};

export default CounterButtons;
