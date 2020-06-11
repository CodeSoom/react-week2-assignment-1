import React, { useState } from 'react';

import Button from './Button';

export default function Buttons () {
  const [state, setState] = useState({count: 0});
  const handlers = [1, 1, 2, 3, 4, 5].map((number) => () => setState({count: state.count + number}));
  const mapButton = (number) => <Button value={number} onClick={handlers[number]} />;

  return (<div><Button value={`Click me! (${state.count})`} onClick={handlers[0]} /><p />{[1, 2, 3, 4, 5].map(mapButton)}</div>);
};
