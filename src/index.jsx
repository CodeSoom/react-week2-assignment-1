import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Title() {
  return <div>Counter</div>;
}

function ButtonClickme(props) {
  const { value, onClick } = props;
  return (
    <button type="button" onClick={onClick}>
      Click me!
      (
      {value}
      )
    </button>
  );
}

function Button(props) {
  const { value } = props;
  const [{ number }, setNumber] = useState(0);
  function handleClickNumber() {
    setNumber({ number: value });
  }

  return (
    <button type="button" onClick={() => { handleClickNumber(); }}>
      {value}
    </button>
  );
}

function ButtonNumber() {
  return (
    [1, 2, 3, 4, 5].map((i) => (
      <Button key={i} value={i} />
    )));
}

function App() {
  const [count, setCount] = useState(0);
  function handleClickCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <Title />
      <p>
        <ButtonClickme value={count} onClick={handleClickCount} />
      </p>
      <p>
        <ButtonNumber />
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
