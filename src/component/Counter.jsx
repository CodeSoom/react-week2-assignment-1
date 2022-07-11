/* @jsx React.createElement */
import React from 'react'; // 리액트 임포트 필수!

// 카운터 컴포넌트
function Counter({ count, onClick }){
    return (
        <button type="button" onClick={onClick}> 
            Click me! ( { count } )
        </button>
    );
}

export default Counter;