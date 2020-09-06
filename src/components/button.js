import React, { useState } from 'react';
import ReactDOM from 'react-dom'

function Button({ children }) {
    return (
        <button type="button">
            {children}
        </button>
     );
 }

 export default Button;