import React from 'react';
import Button from './button';

function Buttons({ buttons, onClick }) {
  return (
    <Button
      buttons={buttons}
      onClick={onClick}
    />
  );
}

export default Buttons;
