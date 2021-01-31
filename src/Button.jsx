import React from 'react';

export default function Button({ onClick, number }) {
  return (
    <>
      <button type="button" onClick={() => onClick(number)}>
        {number}
      </button>
    </>
  );
}
