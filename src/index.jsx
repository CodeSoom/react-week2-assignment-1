/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Buttons({ count, setCount }) {
  function onClickNumbers(numbers) {
    setCount({ count: count + numbers });
  }

  return (
    <div>
      {[1, 2, 3, 4, 5].map((v) => (
        <button type="button" onClick={() => onClickNumbers(v)}>{v}</button>
      ))}

    </div>

  );
}

function Button({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me! (
      {count}
      )
    </button>
  );
}

function Page({ count, setCount, onClick }) {
  return (
    <>
      <p>Counter</p>
      <Button count={count} onClick={onClick} />
      <Buttons count={count} setCount={setCount} />
    </>
  );
}

function App() {
  const [state, setState] = useState({ count: 0 });
  const { count } = state;
  function onClickNumber() {
    setState({ count: count + 1 });
  }
  return (
    <Page count={count} setCount={setState} onClick={onClickNumber} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
