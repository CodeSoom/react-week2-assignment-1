import React from 'react';
import Button from './Button';

const NumberCounter = ({ handleClick }) => [1, 2, 3, 4, 5].map((i) => (
  <Button type="button" key={i} value={i} handleClick={handleClick}>
    {i}
  </Button>
));
export default NumberCounter;
