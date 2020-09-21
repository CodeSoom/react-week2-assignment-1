import React from 'react';

function Button({ onClick, increaseCount, children }) {
    return (
        <button type="button" onClick={() => onClick(increaseCount)}>
            {children}
        </button>
    )
}

export default Button;