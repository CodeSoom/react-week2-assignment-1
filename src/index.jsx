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
  const { value, onClick } = props;
  return (
    <button type="button" onClick={() => { onClick(value); }}>
      {value}
    </button>
  );
}

function ButtonNumber(props) {
  const { onClick } = props;
  return (
    [1, 2, 3, 4, 5].map((i) => (
      <Button key={i} value={i} onClick={onClick} />
    )));
}

function App() {
  const [count, setCount] = useState(0);
  function handleClickCount() {
    setCount(count + 1);
  }

  function handleClickNumber(value) {
    setCount(count + value);
  }

  return (
    <div>
      <Title />
      <p>
        <ButtonClickme value={count} onClick={handleClickCount} />
      </p>
      <p>
        <ButtonNumber onClick={handleClickNumber} />
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
