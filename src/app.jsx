import React, {useState} from 'react';
import { Page } from './page';

export function App() {
    const [state, setState] = useState({
        count: 0,
    });

    const {count} = state;

    function numClick(i){
        setState({
            count: count + i,
        });
    }

    return (
        <div>
            <Page
                count={count}
                onclick={numClick}
            />
        </div>     
    )
}
