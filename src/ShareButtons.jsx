import React from 'react';

export function ShareButtons({value, onClick}) {
    return <button type='button' onClick={onClick}>{value}</button>;
}