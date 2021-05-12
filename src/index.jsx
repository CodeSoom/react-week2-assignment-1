import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClickBtn = () => {
    setCount(count + 1);
  };

  const handleClickNumberBtn = (number) => {
    setCount(count + number);
  };

  return (
    <Page counter={count} onClickBtn={handleClickBtn} onClickNumberBtn={handleClickNumberBtn} />
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
