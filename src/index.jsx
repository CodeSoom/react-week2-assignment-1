import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

const App = () => {
  const [count, setCount] = useState(0);

  function handleClickMe() {
    setCount(count + 1);
  }

  function handleClickNumber(value) {
    setCount(count + value);
  }

  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClickMe={handleClickMe}
        onClickNumber={handleClickNumber}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
