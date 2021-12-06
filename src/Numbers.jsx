import React from 'react';

function Numbers({ onClick }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((number) => (
        <button type="button" onClick={() => onClick(number)}>
          {number}
        </button>
      ))}
    </div>
  );
}

export default Numbers;
