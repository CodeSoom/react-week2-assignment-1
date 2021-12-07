import React from 'react';
import ReactDOM from 'react-dom';

function NumericButton() { // (3) NumericButton컴포넌트: App에서 실행됨
    return (
        [1, 2, 3, 4, 5].map((i) => (
            <button>{i}</button>
        ))
    )
}

function ClickButton() { // (2) ClickButton컴포넌트: App에서 실행됨
    return (
        <button>Click me! ()</button>
    )
}

function App() { // (1) App컴포넌트: ReactDOM에서 실행됨
    return (
        <div>
            <p>Counter</p>
            <ClickButton />
            <NumericButton />
        </div>
    )
}

//
ReactDOM.render(
    <App />,
    document.getElementById('app'),
);