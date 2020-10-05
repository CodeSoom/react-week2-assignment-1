import React from 'react';

import Button from './Button';

function NumberButtons({ onClick }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button key={i} onClick={() => onClick(i)}>
          {i}
        </Button>
      ))}
    </div>
  );
}

export default NumberButtons;
