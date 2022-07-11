import React from 'react';
import Button from './Button';
import NumberButtons from './NumberButtons';

function Page({ count, onClick }) {
  return (
    <>
      <p>Counter</p>
      <p>
        <Button count={count} onClick={onClick} />
      </p>
      <p>
        <NumberButtons onClick={onClick} />
      </p>
    </>
  );
}

export default Page;
