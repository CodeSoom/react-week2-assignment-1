import React, {useState} from 'react';
import ReactDom from 'react-dom';
import { Counter } from './button';
import { NumberButtons } from './numberButtons';
import { Page } from './page';

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
