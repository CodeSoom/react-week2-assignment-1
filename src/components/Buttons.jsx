import React from 'react';

import Button from './Button';

function Buttons({ onClick }) {
  const btnList = [1, 2, 3, 4, 5];
  return (
    <div>
      {btnList.map((number) => (
        <Button key={number} number={number} onClick={onClick} />
      ))}
    </div>
  );
}

export default React.memo(Buttons);
