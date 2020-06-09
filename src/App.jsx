import React, { useState } from 'react';

import Button from './Button';

export default () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Conter</p>
      <p>
        <Button clickhandler={() => setCount(count + 1)}>
          Click me!(
          { count }
          )
        </Button>
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((number) => (
          <Button key={number} clickhandler={() => setCount(count + number)}>{number}</Button>
        ))}
      </p>
    </div>
  );
};
