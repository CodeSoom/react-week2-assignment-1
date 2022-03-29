import React from 'react';
import Button from './Button';

export default function Counter({ count, onClick }) {
  return (
    <Button onClick={() => { onClick(1); }}>
      Click me!
      (
      { count }
      )
    </Button>
  );
}
