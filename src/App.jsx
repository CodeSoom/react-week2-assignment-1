import React, { useState } from 'react';
import Counter from './Counter.jsx';
import ButtonGroup from './ButtonGroup.jsx';


function App() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <p>Counter</p>
      <Counter result={num} />
      <ButtonGroup setNum={setNum} num={num} />
    </div>
  );
}

export default App;
