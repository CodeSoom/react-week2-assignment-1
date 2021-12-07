import React from 'react';
import Button from './Button';
import Buttons from './Buttons';

function Page({ count, setCount }) {
  return (
    <>
      <p>Counter</p>
      <Button count={count} setCount={setCount} />
      <Buttons count={count} setCount={setCount} />
    </>
  );
}

export default Page;
