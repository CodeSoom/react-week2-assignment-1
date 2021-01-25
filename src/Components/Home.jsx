import React, { useState } from 'react';

import Counter from './Counter';
import Buttons from './Buttons';


function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={setCount} />
      <Buttons count={count} onClick={setCount} />
    </div>
  );
}

export default Home;
