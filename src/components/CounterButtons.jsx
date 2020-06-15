import React from 'react';

import Button from './Button';

export default function CounterButtons({ buttons, onClick }) {
  return (
    <div>
      {buttons.map(
        (button) => (
          <Button
            key={button}
            onClick={() => onClick(button)}
          >
            {button}
          </Button>
        ),
      )}
    </div>
  );
}
