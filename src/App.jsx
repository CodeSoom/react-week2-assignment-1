import React, { useState } from 'react';
import { Buttons } from './components/Button';
import Counter from './components/Counter';
import AppContext from './context/AppContext';

const App = () => {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  return (
    <div className="App">
      <p>Counter</p>
      <AppContext.Provider value={{
        count,
        handleClick: (num = 1) => {
          setState({ count: count + num });
        },
      }}
      >
        <Counter />
        <Buttons />
      </AppContext.Provider>
    </div>
  );
};

export default App;
