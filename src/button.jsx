import React from 'react';

export function Button({ count, onClick }) {
    return (
        <p><button onClick={onClick}>Click me!({count})</button></p>
    )
}