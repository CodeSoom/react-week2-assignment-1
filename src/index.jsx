import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/* function Condition({ children }) { // (5) Condition컴포넌트: (4)으로부터 props의 children을 받고, children으로 조건문실행
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
}*/

function Button({ children, onClick }) { // (4) Button컴포넌트: App에서 실행됨, (3)으로부터 i를 children으로 받음
    return (
        <button type="button" onClick={() => onClick(children)}>
            {children}
        </button>
    )
}

function Numeric() { // (3) Numeric컴포넌트
    return (
        [1, 2, 3, 4, 5].map((i) => (
            <Button>
                {i}
            </Button>
        ))
    )
}

function Counter({ count, onClick }) { // (2) Counter컴포넌트: App에서 실행됨, React Hook(useState)를 사용하여 state변수+이 변수를 갱신할 수 있는 함수를 Return
    return (
        <button type="button" onClick={onClick}>
            Click me! ({count})
        </button>
    )
}

function App() { // (1) App컴포넌트: ReactDOM에서 실행됨, count&onClick의 props를 (2)에 넘겨줌
    const [state, setState] = useState({
        count: 0,
        customCount: 0,
    });
    const { count } = state;
    const { customCount } = state;

    function handleClick() {
        setState({
            count: count + 1,
            customCount: customCount + 1,
        });
    }

    return (
        <div>
            <p>Counter</p>
            <Counter
                count={count}
                onClick={handleClick}
            />
            <Button
                customCount={customCount}
                onClick={handleClick}
            />
        </div>
    )
}

//
ReactDOM.render(
    <App />,
    document.getElementById('app'),
);