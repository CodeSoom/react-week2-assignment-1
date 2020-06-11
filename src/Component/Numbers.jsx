import React from 'react';

import Number from './Number';

export default function Numbers({ number, handleClick }) {
  return (
    <Number number={number} onClick={handleClick} />
  );
}
