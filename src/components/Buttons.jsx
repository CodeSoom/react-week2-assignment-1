import React from 'react';

function Buttons({ buttonList }) {
  return (
    <div>
      {buttonList.map((v) => (<button key={v}>{v}</button>))}
    </div>
  );
}

export default Buttons;
