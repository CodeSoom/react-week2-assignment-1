import React from 'react';
import { Counter } from './button';

export function Page({count, onclick}){
    return (
        <div>
            <Counter
                count={count}
                onClick={onclick}
            />
        </div>
    );
}
