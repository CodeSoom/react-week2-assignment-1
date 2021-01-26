import React from 'react';

import Buttons from './buttons';

function Counter({ count, buttons, onClick }) {
  return (
    <>
      <button
        type="button"
        onClick={() => onClick()}
      >
        Click me! (
        { count }
        )
      </button>
      <p>
        <Buttons
          buttons={buttons}
          onClick={onClick}
        />
      </p>
    </>
  );
}

export default Counter;
