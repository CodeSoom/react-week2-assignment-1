import React from 'react';
import ReactDOM from 'react-dom';

function Button({ children }) {
  return (
    <button type="button">{children}</button>
  );
}

function App() {
  return (
    <div>
      <p>Conter</p>
      <p><Button>Click me!(0)</Button></p>
      <p>
        {[1, 2, 3, 4, 5].map((number) => (
          <Button key={number}>{number}</Button>
        ))}
      </p>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
