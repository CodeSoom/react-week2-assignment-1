import React from 'react';

import Button from './Button';

export default function NumberButton({ number, onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      {number}
    </Button>
  );
}
