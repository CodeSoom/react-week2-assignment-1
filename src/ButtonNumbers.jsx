import React from 'react';

import Button from './Button';

function ButtonNumbers({ onClick }) {
  return (
    <p>
      {
        [1, 2, 3, 4, 5].map((i) => (
          <Button onClick={onClick} increaseCount={i} key={i}>
            {i}
          </Button>
        ))
      }
    </p>
  );
}

export default ButtonNumbers;
