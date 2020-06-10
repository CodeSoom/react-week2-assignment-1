import React from 'react';

import Button from './Button';

export default ({ count, onClick }) => (
  <Button onClick={() => onClick(1)}>
    Click me! (
    {count}
    )
  </Button>
);
