import React from 'react';

export default function Buttons({ onClickNumbers }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((v) => (
        <button key={v} type="button" onClick={() => onClickNumbers(v)}>{v}</button>
      ))}

    </div>

  );
}
