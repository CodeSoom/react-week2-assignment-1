import { useState } from 'react';
import ReactDOM from 'react-dom';

function Button({ children, onClick }) { // (4) Button컴포넌트: App에서 실행됨, (3)으로부터 i를 children으로 받음 -> Counter의 역할
    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    )
}

function NumberButtonsFive({ onClick }) { // (3) Numeric컴포넌트 - 얘가 상위컴포넌트? -> App의 역할
    return (
        [1, 2, 3, 4, 5].map((i) => {
            if (i === 5) return (
                <Button onClick={() => onClick(i)}>
                    {i}
                </Button>
            )
        })
    )
}

function NumberButtonsFour({ onClick }) { // (3) Numeric컴포넌트 - 얘가 상위컴포넌트? -> App의 역할
    return (
        [1, 2, 3, 4, 5].map((i) => {
            if (i === 4) return (
                <Button onClick={() => onClick(i)}>
                    {i}
                </Button>
            )
        })
    )
}

function NumberButtonsThree({ onClick }) { // (3) Numeric컴포넌트 - 얘가 상위컴포넌트? -> App의 역할
    return (
        [1, 2, 3, 4, 5].map((i) => {
            if (i === 3) return (
                <Button onClick={() => onClick(i)}>
                    {i}
                </Button>
            )
        })
    )
}

function NumberButtonsTwo({ onClick }) { // (3) Numeric컴포넌트 - 얘가 상위컴포넌트? -> App의 역할
    return (
        [1, 2, 3, 4, 5].map((i) => {
            if (i === 2) return (
                <Button onClick={() => onClick(i)}>
                    {i}
                </Button>
            )
        })
    )
}

function NumberButtons({ onClick }) { // (3) Numeric컴포넌트 - 얘가 상위컴포넌트? -> App의 역할
    return (
        [1, 2, 3, 4, 5].map((i) => {
            if (i === 1) return (
                <Button onClick={() => onClick(i)}>
                    {i}
                </Button>
            )
        })
    )
}

function Counter({ count, onClick }) { // (2) Counter컴포넌트: App에서 실행됨, React Hook(useState)를 사용하여 state변수+이 변수를 갱신할 수 있는 함수를 Return
    return (
        <button type="button" onClick={onClick}>
            Click me! ({count})
        </button>
    )
}

function ShowNumberFive({ count, onClick }) {
    return (
        <NumberButtonsFive
            count={count}
            onClick={onClick}
        />
    )
}

function ShowNumberFour({ count, onClick }) {
    return (
        <NumberButtonsFour
            count={count}
            onClick={onClick}
        />
    )
}

function ShowNumberThree({ count, onClick }) {
    return (
        <NumberButtonsThree
            count={count}
            onClick={onClick}
        />
    )
}

function ShowNumberTwo({ count, onClick }) {
    return (
        <NumberButtonsTwo
            count={count}
            onClick={onClick}
        />
    )
}

function ShowNumber({ count, onClick }) {
    return (
        <NumberButtons
            count={count}
            onClick={onClick}
        />
    )
}

function ShowPage({ count, onClick }) {
    return (
        <div>
            <p>Counter</p>
            <Counter
                count={count}
                onClick={onClick}
            />
        </div>
    )
}

function App() { // (1) App컴포넌트: ReactDOM에서 실행됨, count&onClick의 props를 (2)에 넘겨줌
    const [state, setState] = useState({
        count: 0,
    });
    const { count } = state;

    function handleCounterClick() {
        setState({
            count: count + 1,
        });
    }

    function handleNumberClick() {
        setState({
            count: count + 1,
        });
    }

    function handleNumberClickTwo() {
        setState({
            count: count + 2,
        });
    }

    function handleNumberClickThree() {
        setState({
            count: count + 3,
        });
    }

    function handleNumberClickFour() {
        setState({
            count: count + 4,
        });
    }

    function handleNumberClickFive() {
        setState({
            count: count + 5,
        });
    }

    return (
        <div>
            <ShowPage
                count={count}
                onClick={handleCounterClick}
            />
            <p>
                <ShowNumber
                    count={count}
                    onClick={handleNumberClick}
                />
                <ShowNumberTwo
                    count={count}
                    onClick={handleNumberClickTwo}
                />
                <ShowNumberThree
                    count={count}
                    onClick={handleNumberClickThree}
                />
                <ShowNumberFour
                    count={count}
                    onClick={handleNumberClickFour}
                />
                <ShowNumberFive
                    count={count}
                    onClick={handleNumberClickFive}
                />
            </p>
        </div>
    )
}

//
ReactDOM.render(
    <App />,
    document.getElementById('app'),
);
