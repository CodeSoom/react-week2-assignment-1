import { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

function App() {
  const [state, setState] = useState({ count: 0 });
  const { count } = state;
  function onClickOne() {
    setState({ count: count + 1 });
  }
  function onClickNumbers(numbers) {
    setState({ count: count + numbers });
  }
  return (
    <Page count={count} onClickOne={onClickOne} onClickNumbers={onClickNumbers} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
