import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (number) => {
    setCount((prevCount) => (prevCount + number));
  };

  return (
    <>
      <p>Counter</p>
      <p>
        <button type="button" onClick={() => onClickButton(1)}>
          {`Click me! (${count})`}
        </button>
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <button type="button" key={i} onClick={() => onClickButton(i)}>{i}</button>
        ))}
      </p>

    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
