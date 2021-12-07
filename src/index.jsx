import { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './components/page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  function handleClickNumber(value) {
    setState({
      count: count + value,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
      onNumberClick={handleClickNumber}
    />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
