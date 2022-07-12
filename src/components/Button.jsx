import React from 'react';

export default function Button({ buttonNumber, onClick }) {
  return (
    <button type="button" onClick={() => onClick({ number: buttonNumber })}>
      {buttonNumber}
    </button>
  );
}
