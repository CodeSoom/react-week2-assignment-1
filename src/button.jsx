import React from 'react'

function Button({children, handleClickNumber}){
    return (
        <button type="button" onClick={()=> handleClickNumber(children)}>
            {children}
        </button>
    );
}

export default Button;

