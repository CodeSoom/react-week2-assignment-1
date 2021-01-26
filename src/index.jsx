import React, {useState} from 'react';
import ReactDom from 'react-dom';

function Counter({ count, onClick }) {
    return (
        <button type="button" onClick={onClick}>
            Click me!
            (
            { count }
            )
        </button>
    );
}

function Button({children}) {
    return (
        <button type="button">
            {children}
        </button>
    );
}

function Buttons({ onClick }) {
    return (
        <p>
            {[1, 2, 3, 4, 5].map(i => <button type='button' key={i} onClick={() => onClick(i)}>{i}</button>)}
        </p>
    );
}

function Page({count, onclick}){
    return (
        <div>
            <Counter
                count={count}
                onClick={onclick}
            />
        </div>
    );
}

function PageNum({count, onclick}){
    return (
        <div>
            <Buttons
                count={count}
                onClick={onclick}
            />
        </div>
    );
}

function App() {
    const [state, setState] = useState({
        count: 0,
    });

    const {count} = state;

    function handleClick(){
        setState({
            count: count + 1,
        });
    }

    function numClick(i){
        setState({
            count: count + i,
        });
    }

    return (
        <div>
            <p>Counter</p>
            <Page
                count={count}
                onclick={handleClick}
            />
            <Buttons onClick={numClick} />
        </div>     
    )
}

ReactDom.render (
    <App />,
    document.getElementById('app'),
);