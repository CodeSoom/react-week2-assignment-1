import React, { useState } from 'react';


function State() {
    const [state, setState] = useState({
        count: 0,
    });

    const { count } = state;

    function handleClick() {
        setState({
            count: count + 1,
        });
    }
    return (
        
    );
}



export default State;
