import React from 'react';
import { ShareButtons } from './ShareButtons';

export function NumberButtons({ onClick }) {

    const buttonList = [1, 2, 3, 4, 5].map((i) => 
        <ShareButtons key={i} value={i} onClick={() => onClick(i)}></ShareButtons>
    );
    return (
        <p>
            {buttonList}
        </p>
    );
}
