import React from 'react';

import AddOneButton from './AddOneButton';
import Numbers from './Numbers';

function Page({ onClick, number }) {
  return (
    <div className="numbers-container">
      <AddOneButton number={number} onClick={onClick} />
      <br />
      <Numbers onClick={onClick} />
    </div>
  );
}

export default Page;
