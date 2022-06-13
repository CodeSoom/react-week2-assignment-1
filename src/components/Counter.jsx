import React from 'react';

function Counter({ countUp, count }) {
  const onClickButton = () => {
    countUp(1);
  };

  return (
    <>
      <button type="button" onClick={onClickButton}>
        Click me!
        (
        {count}
        )
      </button>
    </>
  );
}

export default Counter;
