import React from 'react';
import Button from './Button';

const NumberButton = ({ number, onClick }) => (
  <Button type="button" onClick={() => onClick()}>
    {number}
  </Button>
);

export default NumberButton;
