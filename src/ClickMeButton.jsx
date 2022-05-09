import React from 'react';
import Button from './Button';

const ClickMeButton = ({ count, setCount }) => {
  const handleClick = () => {
    setCount((previousCount) => previousCount + 1);
  };
  return (
    <Button type="button" onClick={handleClick}>
      Click me!(
      {count}
      )
    </Button>
  );
};

export default ClickMeButton;
