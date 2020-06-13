import React from 'react';

import Button from './Button';

export default function CounterButtons({ buttonList, onClick }) {
  return (
    <div>
      {buttonList.map(
        (buttonText) => (
          <Button
            key={buttonText}
            onClick={() => onClick(buttonText)}
          >
            {buttonText}
          </Button>
        ),
      )}
    </div>
  );
}
