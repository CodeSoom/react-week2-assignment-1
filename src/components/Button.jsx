import React from 'react';

function Button({ number, onClick }) {
  return (
    <button type="button" onClick={() => onClick(number)}>
      {number}
    </button>
  );
}

export default React.memo(Button);
