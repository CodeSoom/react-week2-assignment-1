import React ,{ useState } from 'react';


function App() {
    const [state, setState] = useState({
        count: 0,
    });

    const {count} = state;

    function handelClick(value) {
        setState({
            count: count + value,
        });
    }

    return (
        <div>
            <p>Counter</p>
            <p>
                <button
                type='button'
                onClick={ () => handelClick(1) }>
                    Click me!
                    (
                    { count }
                    )
                </button>
            </p>
            <p>
                {[1, 2, 3, 4, 5].map((i) => (
                    <button
                    type='button'
                    onClick={ () => handelClick(i)}>
                    {i}
                    </button>
                ))}
            </p>
        </div>
        );
}

export default App;