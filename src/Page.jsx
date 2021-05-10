import React from 'react';
import Counter from './Counter.jsx';
import Buttons from './Buttons.jsx';

function Page({ count, onClick }) {
    return (
        <div>
            <p>Counter</p>
            <Counter
                count={count}
                onClick={onClick} />
            <Buttons
                count={count}
                onClick={onClick} />
        </div>
    );
}

export default Page;