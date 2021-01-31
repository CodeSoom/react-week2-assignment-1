import React from 'react';

function Numbers({ onClick }) {
  return (
    <div className="number-button-container">
      {[1, 2, 3, 4, 5].map((count) => (
        <button type="button" onClick={() => onClick(count)}>
          {count}
        </button>
      ))}
    </div>
  );
}

export default Numbers;
