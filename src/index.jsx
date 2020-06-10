import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Title from './component/title';
import MainButton from './component/main-button';
import ButtonGroup from './component/button-group';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  function handleMainClick({ count }) {
    setState({
      count: count + 1,
    });
  }

  function handleNumberClick({ count, number }) {
    setState({
      count: count + number,
    });
  }

  const { count } = state;

  return (
    <div>
      <Title />
      <MainButton
        count={count}
        onClick={handleMainClick}
      />
      <ButtonGroup
        count={count}
        onClick={handleNumberClick}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
