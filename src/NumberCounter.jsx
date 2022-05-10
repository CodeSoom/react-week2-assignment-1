import React from 'react';
import Button from './Button';

const NumberCounter = ({ handleCountClick }) => [1, 2, 3, 4, 5].map((i) => (
  <Button type="button" key={i} value={i} handleClick={handleCountClick}>
    {i}
  </Button>
));
export default NumberCounter;
