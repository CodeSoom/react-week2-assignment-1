import React from 'react';
import ReactDOM from 'react-dom';

const element = (
  <div>
    hello
  </div>
);

function App() {
  return element;
}

ReactDOM.render(<App />, document.getElementById('app'));
