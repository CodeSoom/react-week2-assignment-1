import React from 'react';
import Counter from './Counter.jsx';

function Page({ count, onClick }) {   
    return (
        <div>
        <p>Counter</p>
        <Counter
        count={count}
        onClick={onClick} />
        <p>
            {[1, 2, 3, 4, 5].map((i) => (
                <button
                type='button'
                onClick={ () => onClick(i)}>
                {i}
                </button>
            ))}
        </p>
    </div>
    );
}

export default Page;