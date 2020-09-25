import React from 'react';

import DigitClickListener from './DigitClickListener';

function Button(props, {count, onClick}) {
    const { children } = props
    return (
        <button type="button">
           {children}
        </button>,
        <DigitClickListener />
);
}

export default Button;