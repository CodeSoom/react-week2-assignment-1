import React from 'react';
import CountButton from './CountButton';

function CountButtons({ handleClickMe }) {
  const counts = [1, 2, 3, 4, 5];

  return (
    <p>
      {counts.map((count) => (
        <CountButton
          key={count}
          number={count}
          handleClickMe={handleClickMe}
        />
      ))}
    </p>
  );
}


export default CountButtons;
