import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

function Page() {
  return (
    <Counter />
  );
}

ReactDOM.render(
  <Page />,
  document.getElementById('app'),
);
