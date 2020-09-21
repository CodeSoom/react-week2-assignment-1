import React from 'react';
import ReactDOM from 'react-dom';
import State from './state';

function Page({ count, onClick }) {
    return (
        <>
            <div>Counter</div>
            <button type="button" onClick={onClick}>
                Click Me! (
        {count}
        )
      </button>
            <p>
                {
                    [1, 2, 3, 4, 5].map((i) => (
                        <button type="button">{i}</button>
                    ))
                }
            </p>
        </>
    );
}


function App() {
    return (
        <State>

        </State>
        <Page
            count={count}
            onClick={handleClick}
        />
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
