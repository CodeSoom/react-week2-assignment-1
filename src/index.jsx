import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import Page from './components/Page';


function App() {
    const [state, setState] = useState({
        count: 0,
    });
    const [number, setNumber] = useState({
        btnNumber: 0,
    });
    const { count } = state;
    const { btnNumber } = state;

    function handleClick(conditionValue) {
        setNumber({
            btnNumber
        });
       
        setState({
            count: count + 1,
        });
    }
// 자식에서 부모로 전달하는 법은?
    return (
        <Page 
            btnNumer={btnNumber}
            count={count}
            onClick={() => handleClick(it)}
            />
    );
}

ReactDOM.render(<App />, document.getElementById('app'));