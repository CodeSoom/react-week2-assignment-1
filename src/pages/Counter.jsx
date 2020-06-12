import React from 'react';

import Button from '../components/Button';
import Buttons from '../components/Buttons';

export default function Counter({ count, onClick }) {
  return (
    <div>
      <h1>Counter</h1>
      <Button onClick={onClick} number={1}>
        {count}
      </Button>
      <Buttons onClick={onClick} />
    </div>
  );
}
