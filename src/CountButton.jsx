import React from 'react';

export default function CountButton({ number, handleClickMe }) {
  return (
    <button type="button" onClick={() => handleClickMe(number)}>{number}</button>
  );
}
