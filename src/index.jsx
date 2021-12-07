import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Condition({ children }) { // (5) Condition컴포넌트: (4)으로부터 props의 children을 받고, children으로 조건문실행
    if (children === 1) {
        return (
            console.log(children)
        )
    }
    if (children === 2) {
        return (
            console.log(children)
        )
    }
    if (children === 3) {
        return (
            console.log(3)
        )
    }
    if (children === 4) {
        return (
            console.log(4)
        )
    }
    if (children === 5) {
        return (
            console.log(5)
        )
    }
}

function Button(props) { // (4) Button컴포넌트: App에서 실행됨, (3)으로부터 i라는 props를 받고, (5)로 props의 children을 전달
    const { children } = props
    return (
        <button onClick={() => Condition({ children })}>
            {children}
        </button>
    )
}

function Numeric() { // (3) Numeric컴포넌트: App에서 실행됨, (4)로 i라는 props를 전달
    return (
        <p>
            {
                [1, 2, 3, 4, 5].map((i) => (
                    <Button>{i}</Button>
                ))
            }
        </p>
    )
}

function Counter({ count, onClick }) { // (2) Counter컴포넌트: App에서 실행됨, React Hook(useState)를 사용하여 state변수와 이 변수를 갱신할 수 있는 함수를 Return
    return (
        <button type="button" onClick={onClick}>
            Click me! ({count})
        </button>
    )
}

function App() { // (1) App컴포넌트: ReactDOM에서 실행됨, count&onClick의 props를 (2)에 넘겨줌
    const [count, setCount] = useState(0) //? 강의처럼 풀어서 하는 이유...

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div>
            <p>Counter</p>
            <Counter
                count={count}
                onClick={handleClick}
            />
            <Numeric />
        </div>
    )
}

//
ReactDOM.render(
    <App />,
    document.getElementById('app'),
);