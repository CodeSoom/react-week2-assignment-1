/* @jsx React.createElement */

import React, { useState } from 'react'; // 리액트 임포트 필수! useState를 사용하므로 필수로 넣어줘야함
import Page from './Page';

// Page 컴포넌트 호출 및 핸들러 이벤트 실행
function App() {
    const [state, setState]  = useState({
        count: 0,
    });

    const { count } = state;

    function handleClick() {
        setState({
            count: count + 1,
        })
    }

    return (
        <Page
            count={count}
            onClick={handleClick}
        />
    )

}

export default App;