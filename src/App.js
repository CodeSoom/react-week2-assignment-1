import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App(){
    const [state, setState] = useState({
        count: 0,
    });

    const { count } = state;

    function handleClick() {
        setState({
            count: count + 1,
        })
    }

    return (
        <Page
            count={count}
            onClick={handleClick}
        />
    );
 }

 export default App;