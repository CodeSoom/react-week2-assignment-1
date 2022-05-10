import React from 'react';

const ClickMe = ({ count, onClick }) => (
  <p>
    <button type="button" onClick={onClick}>
      Click me!
      (
      {count}
      )
    </button>
  </p>
);

export default ClickMe;
