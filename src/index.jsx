import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter'

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
        <Counter count={count} onClick={handleClickCount} />
    );
}

ReactDOM.render(<App />, document.getElementById('app'));