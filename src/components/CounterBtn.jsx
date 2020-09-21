import React from 'react';

function CounterBtn ({count, onClick})   {
    return (
        <button type="button" onClick={onClick}>
            Click me!
            (
                { count }
            )
        </button>
    );
}

export default CounterBtn;