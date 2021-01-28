import React from 'react';
import { Counter } from './button';
import { NumberButtons } from './numberButtons';

export function Page({count, handleClick}){
    return (
        <div>
            <p>Counter</p>
            <Counter 
                count = {count}
                onClick = {handleClick}
            />
            <NumberButtons onClick={handleClick} />
        </div>
    );
}
