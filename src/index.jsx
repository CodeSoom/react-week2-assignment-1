/* @jsx React.createElement */
import React from 'react';
import ReactDOM from 'react-dom';


function Button({ value }) {
  return (
    <button type="button">
      {value}
    </button>
  );
}

function Buttons() {
  return (
    <p>
      {
        [1, 2, 3].map((i) => (
          <Button key={i}>
            {i}
          </Button>
        ))
      }
    </p>
  );
}

const element = (
  <div>
    <Buttons />
  </div>
);

ReactDOM.render(element, document.getElementById('app'));
