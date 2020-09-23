import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Counter = () => {
  const { count, handleClick } = useContext(AppContext);

  return (
    <button type="button" onClick={() => handleClick()}>
      Click me!
      (
      { count }
      )
    </button>
  );
};

export default Counter;
