import React from 'react';
import ReactDOM from 'react-dom';

// const element = <p>Counter</p>; //op1

function Counter({ count, onClick }) { // 2. 반환값: 첫번째 Counter 버튼
    return (
        <p>
            <button type="button" onClick={onClick}>
                Click me! ({count})
            </button>
        </p>
    )
}

function Page({ count, onClick }) { // 1. 반환값: 전체적인틀 count, onClick이 매개변수로 주어지는것?
    return (
        <div>
            <p>Counter</p>
            <Counter
                count={count}
                onClick={onClick}
            />
        </div>
    );
} // op2

function App() { // 0. 이것이 입력값?? count, onClick이 props?? count, onClick이 인자의 형태로 주어지는것?
    const count = 0;
    function handleClick() {
        //
    }
    return (
        <Page
            count={count}
            onClick={handleClick}
        />
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);