import React from 'react';

import Button from '../Button';

function ClickMe({ count, onClick }) {
  return (
    <Button onClick={() => onClick(1)}>
      Click me! (
      {count}
      )
    </Button>
  );
}

export default ClickMe;
