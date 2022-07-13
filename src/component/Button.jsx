/* @jsx React.createElement */
import React from 'react'; // 리액트 임포트 필수!

// 버튼 컨포넌트
// eslint-disable-next-line react/prop-types
export default function Button({ children, onClick }) {
    return (
        <button type="button" onClick={() => onClick(children)}>            
            {children}
        </button>
    );
}
