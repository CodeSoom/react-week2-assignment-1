import React from 'react';
import Button from './Button';

function CounterButtons({ buttonList, onClick }) {
  return (
    <div>
      {buttonList.map(
        (buttonText) => (
          <Button
            key={buttonText}
            buttonText={buttonText}
            onClick={() => onClick(buttonText)}
          />
        ),
      )}
    </div>
  );
}

export default CounterButtons;
