import React from 'react';

import Button from './Button';

export default ({ handleClickNumber }) => (
  <>
    {[1, 2, 3, 4, 5].map((number) => (
      <Button
        type="button"
        onClick={() => handleClickNumber(number)}
      >
        {number}
      </Button>
    ))}
  </>
);
