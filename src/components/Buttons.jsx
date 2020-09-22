import React from 'react';
import Button from './Button'

function Buttons (it, onClick) {
    return (
        <p>
            {[1,2,3,4,5].map((it) => (
                <Button key={it} btnNumber={it} onClick={onClick}> 
                    {it} 
                </Button>
            ))}
        </p>
    )
}

export default Buttons;