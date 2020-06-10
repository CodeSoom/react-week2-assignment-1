import React, { useState } from 'react';
import Page from './page';

function App() {
    
    const [state, setState] = useState(
        { count : 0, }
    )

    const { count } = state;

    function handleClick() {
        setState({
            count : count + 1,                
        });
    }

    function handleClickNumber(number) {
        setState({
            count : count + number,                
        });
    }
    
    return (
        <Page
            count = {count}
            onClick = {handleClick}
            handleClickNumber = {handleClickNumber}
        />
            
    );
}

export default App;
