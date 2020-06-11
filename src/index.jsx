import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Buttons from './components/Buttons';


function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;
  return (
    <div>
      Click me !(
      {count}
      )
      <Buttons buttonList={[1, 2, 3, 4, 5]} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
