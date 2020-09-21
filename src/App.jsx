import React, { useState } from 'react';

export default function App() {
  const [state] = useState({
    count: 123,
  });

  const { count } = state;

  return (
    <div>
      <p>Counter</p>
      <p>
        count:(
        {count}
        )
      </p>
    </div>
  );
}
