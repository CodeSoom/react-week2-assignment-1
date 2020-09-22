import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import Page from './components/Page';


function App() {
    const [state, setState] = useState({
        count: 0,
    });

    const { count } = state;

    function handleClick(conditionValue) {
        if(conditionValue === 2){        
        setState({
            count: count + 2,
        });
        }
        if(conditionValue === 3){        
            setState({
                count: count + 3,
            });
        }
        if(conditionValue === 4){        
            setState({
                count: count + 4,
            });
        }
        if(conditionValue === 5){        
            setState({
                count: count + 5,
            });
        }
        setState({
            count: count + 1,
        });
    }

    return (
        <Page 
            btnNumer={number}
            count={count}
            onClick={() => handleClick(it)}
            />
    );
}

ReactDOM.render(<App />, document.getElementById('app'));