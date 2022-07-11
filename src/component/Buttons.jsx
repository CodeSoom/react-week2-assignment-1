/* @jsx React.createElement */

import React from 'react'; // 리액트 임포트 필수!
import Button from './Button';

// 버튼 뷰 컴포넌트
function Buttons() {
    return (
        <p>
            {[1, 2, 3].map((i) => (
                // runderButton(i)
                <Button key = {i}>
                    {i}
                </Button>
            ))}            
        </p>
    );
}

export default Buttons;