import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [number, setState] = useState(0);

  return (
    <div>
      <p>
        Counter
      </p>
      <p>
        <button type="button" onClick={() => setState(number + 1)}>
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
