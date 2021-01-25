import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function App() {
  const [number, setState] = useState(0);

  function handleClick(value) {
    setState(value);
  }

  return (
    <div>
      <p>
        Counter
      </p>
      <p>
        <button type="button" onClick={() => handleClick(number + 1)}>
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
