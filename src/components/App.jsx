import React, { useState } from 'react';

import Page from './Page';

//Operate counting & return Page
function App() {
    const [state, setState] = useState({
        count: 0,
    });

    const {count} = state;

    function handleClick(value) {
        setState({
            count: count + value
        });
    }

    return (
        <Page
            count={count}
            onClick={handleClick}
        />
    );
}

export default App;