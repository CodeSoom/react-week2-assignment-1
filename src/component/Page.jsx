/* @jsx React.createElement */

import React from 'react';
import Buttons from './Buttons';
import Counter from './Counter';

// 페이지 컴포넌트
function Page({ count, onClick }) {
    return (
        <div>
            <p>Hellow, world!!!</p>
            <p>Hi!</p>
            <Counter
                count={count}
                onClick={() => onClick()}
            />
            <Buttons />
        </div>
    );
}

export default Page;