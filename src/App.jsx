import { useState } from 'react';
import Counter from './Counter';

export default function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (number) => setCount(count + number);
  return <Counter count={count} clickHandler={onClickButton} />;
}
