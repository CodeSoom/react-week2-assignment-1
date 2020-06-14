import React, { useState } from 'react';

import Button from './Button';

export default function App() {
  const [state, setState] = useState({ count: 0 });
  const handleClick = (number) => () => setState({ count: state.count + number });

  return (
    <div>
      <div>Counter</div>
      <div>
        <Button value={`Click me! (${state.count})`} onClick={handleClick} />
      </div>
      {[1, 2, 3, 4, 5].map((number) => (
        <Button number={number} onClick={handleClick} />
      ))}
    </div>
  );
}
