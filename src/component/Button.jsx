/* @jsx React.createElement */
import React from 'react';

// 버튼 컨포넌트
function Button({ children }) {
    return (
        <button type="button">            
            {children}
        </button>
    );
}

export default Button;