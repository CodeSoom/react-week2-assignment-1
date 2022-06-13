import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me!(
      {count}
      )
    </button>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={() => onClick(children)} type="button">{children}</button>
  );
}

function Buttons({ createNumbers, onClick }) {
  return (
    <p>
      {createNumbers(5).map((i) => (
        <Button onClick={onClick} key={i}>{i}</Button>
      ))}
    </p>
  );
}

function Page({ count, onClick, createNumbers }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={() => onClick()} />
      <Buttons createNumbers={createNumbers} onClick={onClick} />
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (number = 1) => {
    setCount(count + number);
  };

  // createNumbers가 Buttons에 들어가야 좋을지 App에 들어가야 좋을지 고민하다
  // createNumbers는 범용적으로 사용할 수 있는 함수일 것 같아 App에 넣었습니다...!
  const createNumbers = (length) => {
    const numbers = new Array(length).fill().map((_, i) => i + 1);
    return numbers;
  };

  return (
    <Page
      count={count}
      onClick={handleClick}
      createNumbers={createNumbers}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
