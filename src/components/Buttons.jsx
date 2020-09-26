import React from 'react';

function Buttons({ count, onClick }) {
    return (
        <p>
            {[1, 2, 3, 4, 5].map((digit) => (
                <button
                    key={digit}
                    type="button"
                    onClick={() => onClick(digit)}>
                    {digit}
                </button>
            ))}
        </p>
    );
}

export default Buttons;