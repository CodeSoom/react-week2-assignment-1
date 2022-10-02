import React from 'react';
import Button from './Button';
import NumberButton from './NumberButton';

function Page({ count, onClick }) {
  return (
    <>
      <p>Counter</p>
      <p>
        <Button
          count={count}
          onClick={onClick}
        />
      </p>
      <p>
        <NumberButton
          onClick={onClick}
        />
      </p>
    </>
  );
}

export default Page;
