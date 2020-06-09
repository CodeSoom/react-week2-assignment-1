import React from 'react';
import Button from './Button';

const CountDisplayButton = ({ count, onClick }) => (
  <Button type="button" onClick={onClick}>
    Click me! (
    {count}
    )
  </Button>
);

export default CountDisplayButton;
