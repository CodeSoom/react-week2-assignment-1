/* @jsx React.createElement */

import React, { useState } from 'react'; // 리액트 임포트 필수! useState를 사용하므로 필수로 넣어줘야함
import Page from './Page';

// Page 컴포넌트 호출 및 핸들러 이벤트 실행
export default function App() {
    const [state, setState]  = useState({
        count: 0,
    });

    const { count } = state;

    function handleClick(AddNumber = 1) { // AddNumber는 기본값 1을 통하여 클릭미 클릭할때 1씩 증감하도록 처리
        console.log(AddNumber); // onClick 함수에서 가져온 AddNumber = children이다 children은 button  컴포넌트에서 가져온거다.
        
        setState({
            count: count + AddNumber,
        })
    }

    return (
        <Page
            count={count}
            onClick={handleClick}
        />
    )

}
