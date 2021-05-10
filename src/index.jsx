/* JSX React.createElement */

import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <p>Hello, World!!!</p>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
