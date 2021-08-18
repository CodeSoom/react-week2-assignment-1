import React from 'react';
import Button from './Button';

export default function Buttons({ onClick }) {
  const NUMBER_BUTTONS = [1, 2, 3, 4, 5];

  return (
      <p>
          {NUMBER_BUTTONS.map((i) => (
              <Button 
              key={i} 
              onClick={() => onClick(i)}
              >
                  {i}
              </Button>
          ))}
      </p>
  );
}
