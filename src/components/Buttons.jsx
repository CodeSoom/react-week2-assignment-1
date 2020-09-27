import React from 'react';

import Button from './Button';

const Buttons = ({ onClick }) => (
  <p>
    {[1, 2, 3, 4, 5].map((i) => (
      <Button key={i.toString()} onClick={() => onClick(i)}>
        {i}
      </Button>
    ))}
  </p>
);

export default Buttons;
