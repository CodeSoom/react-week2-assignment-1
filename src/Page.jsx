import React from 'react';


function Page({ count, onClick }) {   
    return (
        <div>
        <p>Counter</p>
        <p>
            <button
            type='button'
            onClick={ () => onClick(1) }>
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
                onClick={ () => onClick(i)}>
                {i}
                </button>
            ))}
        </p>
    </div>
    );
}

export default Page;