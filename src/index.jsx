/* @jsx React.createElement */

// import React, {children} from 'react'; 하면 왜 안되지?
// react hooks 중에 useState 사용
import React, { useState } from 'react';
import ReactDOM from 'react-dom';


//Counter 컴포넌트; count의 값을 보여주는 역할(ui)
function Counter({count, onClick}){
    return(
        <button type = "button" onClick={onClick}>
            Click me! 
            (
            {count}
            )
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

//count가 어떻게 처리되는지는 모른다.
function Page({count, onClick}){
    return (
        <div>
            <p>hello world</p>
            <p><Counter
                count={count}
                onClick={onClick} />
            </p>
            <Buttons />
        </div>
    );
}

//App 컴포넌트; 보여지는 건 관심 없고, 상태 관리(business logic)
function App() {
    const [state, setState] = useState({
        count: 0,
    });

    const { count } =state;

    function handleClick(){
        setState({
            count: count + 1,
        })
    }

    return (
        <Page
        count = {count}
        onClick = {handleClick}
        />
    );
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
