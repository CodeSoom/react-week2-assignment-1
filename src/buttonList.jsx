import React from 'react';
import Button from './button';

const ButtonList = ({ numbers, onClick }) => (
  <div>
    {numbers.map((number) => (
      <Button key={number} onClick={() => onClick(number)}>
        {number}
      </Button>
    ))}
  </div>
);

export default ButtonList;
