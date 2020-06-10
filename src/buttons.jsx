import React from 'react'
import Button from './button';

function Buttons({handleClickNumber}){
    const numbers = [1,2,3,4,5];
    return(
        <p>                   
            {numbers.map((i) => (
                <Button key={i} handleClickNumber ={handleClickNumber}>
                    {i}
                </Button>
            ))}
        </p>
    );
}

export default Buttons;

