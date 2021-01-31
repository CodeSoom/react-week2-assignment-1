import React, { useState } from 'react';

import Counter from './Counter';
import Buttons from './Buttons';


function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <p>Counter</p>
      <Counter result={number} />
      <Buttons setNumber={setNumber} number={number} />
    </div>
  );
}

export default App;
