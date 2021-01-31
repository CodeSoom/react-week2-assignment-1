import React, {useState} from 'react';
import { Page } from './page';

export function App() {
    const [state, setState] = useState({
        count: 0,
    });

    const {count} = state;

    function handleClick(increase){
        setState({
            count: count + increase,
        });
    }

    return (
        <Page
            count={count}
            onclick={handleClick}
        />
    )
}
