import React, { useState } from 'react';
import Page from './Page.jsx';


function App() {
    const [state, setState] = useState({
        count: 0,
    });

    const { count } = state;

    function handelClick(value) {
        setState({
            count: count + value,
        });
    }

    return (
        <Page
            count={count}
            onClick={handelClick} />
    );
}

export default App;