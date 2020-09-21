import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';
import Button from './Button';

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={() => onClick(1)} />
      <Button onClick={() => onClick(1)}>
        {`count : ${count}`}
      </Button>
      <Buttons onClick={onClick} />
    </div>
  );
}

export default Page;
