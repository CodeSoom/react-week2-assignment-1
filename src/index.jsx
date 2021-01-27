import React, {useState} from 'react';
import ReactDom from 'react-dom';
import { Counter } from './button';
import { NumberButtons } from './numberButtons';

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
            <NumberButtons onClick={numClick} />
        </div>     
    )
}

ReactDom.render (
    <App />,
    document.getElementById('app'),
);
