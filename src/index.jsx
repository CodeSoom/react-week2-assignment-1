import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Title({ title }) {
  return (
    <p>
      {title}
    </p>
  );
}

function App() {
  const [state, setState] = useState({
    title: 'Counter',
    numbers: [1, 2, 3, 4, 5],
  });

  const { title } = state;

  return (
    <div>
      <Title
        title={title}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
