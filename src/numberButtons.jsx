import React from 'react';

export function NumberButtons({ numClick }) {
    return (
        <p>
            {[1, 2, 3, 4, 5].map(i => <button type='button' key={i} onClick={() => numClick(i)}>{i}</button>)}
        </p>
    );
}
