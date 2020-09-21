import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [state, setState] = useState({
        count: 0,
    });

    const { count } = state;

    function handleClickCount(value) {
        setState({
            count: count + value,
        });
    }

    return (
        <div>
            <p>Counter</p>
            <button type="button" onClick={() => handleClickCount(1)}>
                Click me! ({count})
            </button>
            <p>
                {
                    [1, 2, 3, 4, 5].map((i) => (
                        <button type="button" key={i} onClick={() => handleClickCount(i)}>{i}</button>
                    ))
                }
            </p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));