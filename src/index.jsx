import { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (number) => setCount(count + number);
  return <Counter count={count} clickHandler={onClickButton} />;
}

ReactDOM.render(<App />, document.getElementById('app'));
