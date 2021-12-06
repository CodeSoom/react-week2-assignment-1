import React from 'react';

import Button from './button';

function Buttons() {
  const NUMBER_BUTTONS = [1, 2, 3, 4, 5];

  return (
    <p>
      {NUMBER_BUTTONS.map((number) => (
        <Button number={number} />
      ))}
    </p>
  );
}

export default Buttons;
