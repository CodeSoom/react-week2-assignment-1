import React from 'react';
import Buttons from './Buttons';
import CounterBtn from './CounterBtn';

function Page({btnNumber, count, onClick}) {
    return (
        <div>
            <p>Counter</p>
            <CounterBtn 
                count={count}
                onClick={onClick}
            />
            <Buttons key={btnNumber} onClick={onClick}
            />
        </div>
    )
}

export default Page;