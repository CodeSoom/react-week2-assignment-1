import React, { useState } from 'react';
import ReactDOM from 'react-dom'

function Counter({count, onClick}){
    return (
        <button type="button" onClick={onClick}>
            Click me!
            (
            { count }
            )
        </button>
    );
 }

 export default Counter;