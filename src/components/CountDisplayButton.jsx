import React from 'react';
import Button from './Button';

const CountDisplayButton = ({ count, onClick }) => (
  <Button type="button" onClick={() => onClick(count + 1)}>
    Click me! (
    {count}
    )
  </Button>
);

export default CountDisplayButton;
