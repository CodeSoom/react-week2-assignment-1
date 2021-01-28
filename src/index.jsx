import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function Button({number, onClick}) {
  return (
    <button type="button" onClick={onClick}>
      Click me! (
      {
        number
      }
      )
    </button>
  );
}

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
        <Button
          number={number}
          onClick={() => handleClick(number + 1)}
        />
        <p>
          {[1, 2, 3, 4, 5].map((i) => (
            <button>
              {i}
            </button>
          ))}
        </p>
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
