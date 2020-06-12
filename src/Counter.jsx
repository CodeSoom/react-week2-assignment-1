import React from 'react';

// Counter 컴포넌트; count의 값을 보여주는 역할(ui)
function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me! (
      {count}
      )
    </button>
  );
}

export default Counter;
