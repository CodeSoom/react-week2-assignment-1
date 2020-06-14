import React, { useState } from 'react';
import ReactDOM from 'react-dom'

function Page({ count, onClick }) {
    return (
        <div>
            <p>Counter</p>
            <Counter 
                count={count}
                onClick={onClick}
            />
            <Buttons />  
        </div>
    );
 }

 export default Page;