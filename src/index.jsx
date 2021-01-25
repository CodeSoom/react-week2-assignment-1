import React from 'react';
import ReactDOM from 'react-dom';

const number = 0;
function handleClick() {
  console.log('click');
}
function App() {
  return (
    <div>
      <p>
        Counter
      </p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me! (
          {number}
          )
        </button>
      </p>
    </div>

  );
}
function Page() {
  return (
    <App />
  );
}

ReactDOM.render(
  <Page />,
  document.getElementById('app'),
);
