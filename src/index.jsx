import React from 'react';
import ReactDom from 'react-dom';
import CountPage from './countPage';

function App() {
  return (
    <CountPage />
  );
}

ReactDom.render(
  <App />,
  document.getElementById('app'),
);
