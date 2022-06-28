import React from 'react';

export default function Buttons({ buttonList, onClick }) {
  return (
    <p>
      {
        buttonList.map((i) => (
          <button type="button" key={i} onClick={() => onClick(i)}>{i}</button>
        ))
      }
    </p>
  );
}
