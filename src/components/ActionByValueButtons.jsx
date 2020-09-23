import React from 'react';
import Button from './Button';

function ActionByValueButtons({ valueList, onClick }) {
  return (
    <>
      {
        valueList.map((value) => (
          <Button
            key={value}
            value={value}
            onClick={() => onClick(value)}
          />
        ))
      }
    </>
  );
}

export default ActionByValueButtons;
