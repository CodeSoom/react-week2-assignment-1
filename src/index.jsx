/* @jsx React.createElement */

import React, { useState } from 'react';
// import React, {children} from 'react'; 하면 왜 안되지?
import ReactDOM from 'react-dom';

let count = 0;

function handleClick(){
    console.log('click');
    count += 1;
    console.log(count);
    render();
}

function Counter(){
    return(
        <button type = "button" onClick={handleClick}>
            Click me! ({count})
        </button>
    )
}

function Button({ children }) {
    return (
    <button type="button">
        {children}
    </button>
    );
}

function Buttons() {
    return ([1, 2, 3].map(
        (i) => 
        //선언적 프로그래밍
        <Button key={i}>
            {i}
        </Button>
    ));
}
function Apps() {
    return (
        <div>
            <p>hello world</p>
            <Counter />
            <Buttons />
        </div>
    );
}

function render(){
    ReactDOM.render(
    <Apps />,
    document.getElementById('app')
    );
}
render()