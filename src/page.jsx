import React from 'react'
import Counter from './counter';
import Buttons from './buttons.jsx';

function Page({count,onClick,handleClickNumber}){
    return (
        <div>
            <p>Hello,world!</p>
            <Counter
                count = {count}
                onClick = {onClick}
            />
            <Buttons 
                handleClickNumber = {handleClickNumber}
            />
        </div>
    );
}

export default Page;
