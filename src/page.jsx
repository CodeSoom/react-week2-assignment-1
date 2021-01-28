import React from 'react';
import { Counter } from './button';
import { NumberButtons } from './numberButtons';

export function Page({count, onclick}){
    return (
        <div>
            <Counter 
                count = {count}
                onClick = {onclick}
            />
            <NumberButtons onClick={onclick} />
        </div>
    );
}
