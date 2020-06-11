/* @jsx React.createElement */

// import React, {children} from 'react'; 하면 왜 안되지?
// react hooks 중에 useState 사용
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

let count = 0;

function Counter(){
    ////////////////////////////////
    //useState를 통해서 Counter 컴포넌트에 갇힌 state 생성
    //초기에 state에 object가 할당
    //이후 setState를 통해서 object 내부 값 변경
    const [state, setState] = useState({
        count: 0,
    })

    const {count} = state;

    function handleClick() {
        console.log('click');
        setState({
            count: count + 1,
        })
    }
    ////////////////////////////////
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