import React from 'react';
import ReactDOM from 'react-dom';

function Button(props) { // (4) Button컴포넌트: App에서 실행됨, i라는 props를 받음
    const { children } = props
    return (
        <button type="button">
            {children}
        </button>
    )
}

function Numeric() { // (3) Numeric컴포넌트: App에서 실행됨, i라는 props를 Button컴포넌트에 전달
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

function Counter() { // (2) Counter컴포넌트: App에서 실행됨
    return (
        <button>Click me! ()</button>
    )
}

function App() { // (1) App컴포넌트: ReactDOM에서 실행됨
    return (
        <div>
            <p>Counter</p>
            <Counter />
            <Numeric />
        </div>
    )
}

//
ReactDOM.render(
    <App />,
    document.getElementById('app'),
);