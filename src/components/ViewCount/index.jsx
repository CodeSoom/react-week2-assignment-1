import React from 'react';

function CounterView({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me!(
      {count}
      )
    </button>
  );
}

export default CounterView;
