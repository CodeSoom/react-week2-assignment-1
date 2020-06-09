import React from 'react';
import Button from './Button';

const Buttons = ({ onClick }) => (
  [1, 2, 3, 4, 5].map((number) => (
    <Button key={number} onClick={() => onClick(number)}>{number}</Button>
  ))
);

export default Buttons;
