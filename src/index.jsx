import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Buttons from './Buttons';
import ClickMe from './ClickMe';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        Counter
      </h1>
      <p>
        {count}
      </p>
      <ClickMe count={count} setCount={setCount} />
      <Buttons setCount={setCount} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
