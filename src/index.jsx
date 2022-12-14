import { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClickButton(number = 1) {
    setState({
      count: count + number,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClickButton}
    />
  );
}
ReactDOM.render(<App />, document.querySelector('#app'));
