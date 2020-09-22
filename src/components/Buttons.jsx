import React from 'react';
import Button from './Button'

function Buttons (onClick) {
    function onClick(i){
        console.log("click");
        }
    return (
        <p>
            {[1,2,3,4,5].map((it) => (
                <Button key={it} onClick={() => onClick(it)}> 
                    {it} 
                </Button>
            ))}
        </p>
    )
}

export default Buttons;