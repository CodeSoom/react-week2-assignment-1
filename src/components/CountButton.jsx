import React from 'react';

function CountButton({ countUp, count }) {
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

export default CountButton;
