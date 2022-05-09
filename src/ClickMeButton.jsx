import React from 'react';

const ClickMeButton = ({ count, setCount }) => {
  const handleClick = () => {
    setCount((previousCount) => previousCount + 1);
  };
  return (
    <button type="button" onClick={handleClick}>
      Click me!(
      {count}
      )
    </button>
  );
};

export default ClickMeButton;
