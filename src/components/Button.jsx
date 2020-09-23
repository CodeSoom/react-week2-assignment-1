import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Button = ({ children, onClick }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

const Buttons = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button key={i} onClick={() => handleClick(i)}>
          {i}
        </Button>
      ))}
    </p>
  );
};

export { Button, Buttons };
