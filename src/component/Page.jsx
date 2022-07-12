/* @jsx React.createElement */

import * as React from 'react';
export { React };
import Buttons from './Buttons';
import Counter from './Counter';

// 페이지 컴포넌트
// eslint-disable-next-line react/prop-types
function Page({ count, onClick }) { // onClick 함수 호출
    return (
        <div>
            <p>Counter</p>
            <Counter count = {count} onClick = {onClick} />
            <Buttons onClick = {onClick} />
        </div>
    );
}

export default Page;
