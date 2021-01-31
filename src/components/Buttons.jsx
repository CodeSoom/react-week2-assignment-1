import React from 'react';

import Button from './Button';

export default function Buttons({ buttons, onClick }) {
  return buttons.map((button) => (
    <Button
      value={button.value}
      key={button.id}
      onClick={onClick}
    />
  ));
}
