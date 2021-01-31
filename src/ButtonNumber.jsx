import React from 'react';
import Button from './Button';

function ButtonNumber({ onClick }) {
  return (
    [1, 2, 3, 4, 5].map((i) => (
      <Button key={i} value={i} onClick={onClick} />
    )));
}

export default ButtonNumber;
