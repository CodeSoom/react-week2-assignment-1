import React from 'react';
import Buttons from '../../components/Buttons';
import ViewCount from '../../components/ViewCount';

function Counter({ count, onClick, createNumbers }) {
  return (
    <div>
      <p>Counter</p>
      <ViewCount count={count} onClick={() => onClick()} />
      <Buttons createNumbers={createNumbers} onClick={onClick} />
    </div>
  );
}

export default Counter;
