/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../components/Button';
import Buttons from '../components/Buttons';

function Counter({ numbers, count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Button
        id="Click me"
        count={count}
        onClick={() => {
          onClick(1);
        }}
      />
      <Buttons numbers={numbers} count={count} onClick={onClick} />
    </div>
  );
}

export default Counter;
