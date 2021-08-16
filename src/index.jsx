import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter({ count, onClick }) {
    return (
        <button type="button" onClick={() => onClick(1)}>
            Click me!
            (
            { count }
            )
        </button>
    );
}

function Button({ children, onClick }) {
    return (
            <button type="button" onClick={onClick}>
                {children}
            </button>
    );
}

function Buttons({ onClick }) {
    const NUMBER_BUTTONS = [1, 2, 3, 4, 5];

    return (
        <p>
            {NUMBER_BUTTONS.map((i) => (
                <Button key={i} onClick={() => onClick(i)}>
                    {i}
                </Button>
            ))}
        </p>
    );
}

function Page({ count, onClick }) {
    return (
        <div>
            <p>Hello, world!</p>
            <Counter 
                count={count}
                onClick={onClick}
            />
            <Buttons 
                onClick={onClick}
            />
        </div>
    );
}

function App() {
    const [state, setState]  = useState({
        count: 0,
    });
    
    const { count } = state;

    function handleClick(i) {
        setState({
            count: count + i,
        });
    }
    
    return (
        <Page
            count={count}
            onClick={handleClick}
        />
    );
}

ReactDOM.render(
    <App />,   
    document.getElementById('app'),
);

