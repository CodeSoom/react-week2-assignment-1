import React from 'react';

import Button from './Button';

function Buttons({count, onClick}) {
    return (
        <p>
            {[1, 2, 3, 4, 5].map((digit) => (
                <Button 
                key={digit} 
                count = {count} 
                onClick={onClick}>
                    {digit}
                </Button>
            ))}
        </p>
    );
}

export default Buttons;