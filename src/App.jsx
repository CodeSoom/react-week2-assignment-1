import React, { useState } from 'react';

import Button from './Button';

export default () => {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  return (
    <div>
      <p>Counter</p>
      <p>
        <Button clickhandler={() => setState({ count: count + 1 })} i={`Click me!(${count})`} />
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((number) => (
          <Button
            key={number}
            clickhandler={() => setState({ count: count + number })}
            i={number}
          />
        ))}
      </p>
    </div>
  );
};
