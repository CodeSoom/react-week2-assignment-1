import React from 'react';
import Button from './Button';

function Buttons({ buttonList, onClick }) {
  return (
    <div>
      {buttonList.map(
        (buttonText) => (
          <Button
            key={buttonText}
            buttonText={buttonText}
            onClick={onClick}
          />
        ),
      )}
    </div>
  );
}

export default Buttons;
