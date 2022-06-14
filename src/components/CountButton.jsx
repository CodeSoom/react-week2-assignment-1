import React from 'react';

export default function CountButton({ countUp, count }) {
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
