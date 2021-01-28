import React from 'react';

export function ShareButtons({value, onClick}) {
    return <button type='button' onClick={onClick}>{value}</button>;
}

export function NumberButtons({ onClick }) {

    const buttonList = [1, 2, 3, 4, 5, 6].map((i) => 
        <ShareButtons key={i} value={i} onClick={() => onClick(i)}></ShareButtons>
    );
    return (
        <p>
            {buttonList}
        </p>
    );
}
