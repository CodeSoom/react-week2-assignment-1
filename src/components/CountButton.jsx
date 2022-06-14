import React from 'react';

export default function CountButton({ increasingNumber, onClick, count }) {
  const handleClickButton = () => {
    onClick(increasingNumber);
  };

  return (
    <>
      <button type="button" onClick={handleClickButton}>
        Click me!
        (
        {count}
        )
      </button>
    </>
  );
}
