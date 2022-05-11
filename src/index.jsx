// 라이브러리 & 프레임워크
import React from 'react';
import ReactDOM from 'react-dom';
// 컴포넌트
import Counter from './Counter';

// 전체 App 요소
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
