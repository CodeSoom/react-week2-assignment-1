import React from 'react';

import Button from './Button';

export default function Buttons({ buttons, onClick }) {
  return (
    <div>
      {
        buttons.map(({ index, increaseByStep }) => (
          <Button value={index} onClick={() => onClick(increaseByStep)} />
        ))
      }
    </div>
  );
}
