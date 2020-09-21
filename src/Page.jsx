import React from 'react';
import NumberButtons from './NumberButtons';
import Button from './Button';

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Button onClick={() => onClick(1)}>
        {`Click me (${count})`}
      </Button>
      <NumberButtons onClick={onClick} />
    </div>
  );
}

export default Page;
