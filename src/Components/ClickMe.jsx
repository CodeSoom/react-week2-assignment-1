import React from 'react';

import Button from './Button';

export default function ClickMe({ count, onClick }) {
  return (
    <p>
      <Button key="click" onClick={() => onClick(1)}>
        {`Click me!! (${count})`}
      </Button>
    </p>
  );
}
