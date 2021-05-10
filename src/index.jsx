/* JSX React.createElement */

import React from 'react';
import ReactDOM, { render } from 'react-dom';

function ClickMeButton() {
    return (
        <p>
          <button type="button">
                Click me!
          </button>
        </p>
    );
}

function NumberButton(props) {
    return (
        <button type="button">
            {props.value}
        </button>
    );
}

function NumberButtons() {
    return (
        <p>
            {[1, 2, 3, 4, 5].map((value) => (
                <NumberButton value={value} />
            ))}
        </p>
    );
}

function App() {
    return (
        <div>
            <p>Counter</p>
            <ClickMeButton />
            <NumberButtons />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
