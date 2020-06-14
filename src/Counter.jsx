import React from 'react';

import Button from './Button';

export default function Counter({ count, onClick }) {
  return (
    <Button type="button" count={1} onClick={onClick}>
      Click me! (
      { count }
      )
    </Button>
  );
}
