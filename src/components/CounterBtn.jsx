import React from 'react';

function CounterBtn ({count, it, onClick})   {
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