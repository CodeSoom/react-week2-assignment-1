import React, { useState } from 'react';
import Button from './Button';

const Buttons = () => {
  const [count, setCount] = useState(0);
  const handlers = [1, 1, 2, 3, 4, 5].map((number) => () => setCount(count + number));
  const mapButton = (number) => <Button value={number} onClick={handlers[number]} />;
  const components = [<Button value={`Click me! (${count})`} onClick={handlers[0]} />, <p />, ...[1, 2, 3, 4, 5].map(mapButton)];

  return (<div>{components.map((element) => element)}</div>);
};

export default Buttons;
