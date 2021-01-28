import React, {useState} from 'react';
import { Page } from './page';

export function App() {
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
            <Page
                count={count}
                onclick={handleClick}
                numClick={numClick}
            />
        </div>     
    )
}
