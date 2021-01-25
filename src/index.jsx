import React from 'react';
import ReactDom from 'react-dom';

function Button({ children }) {
  return (
    <button type="button">
      { children }
    </button>
  );
}

function Buttons() {
  return (
    <p>
      {[1, 2, 3].map((i) => (
        <Button key={i}>
          {i}
        </Button>
      ))}
    </p>
  );
}
function createElement() {
  return 'Hello, world!';
}

function App() {
  return (
    <div>
      <p>Hello,world!</p>
      <Buttons />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
