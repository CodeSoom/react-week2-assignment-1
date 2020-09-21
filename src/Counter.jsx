import React from 'react';

import Button from './Button';
import ButtonNumbers from './ButtonNumbers';

function Counter({ count, onClick }) {
    return (
        <div>
            <p>Counter</p>
            <Button onClick={onClick} increaseCount={1}>
                Click me! ({count})
            </Button>
            <ButtonNumbers onClick={onClick} />
        </div>
    )
}

export default Counter;