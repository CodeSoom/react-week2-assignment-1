import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// 리액트 2-1 과제 : 2차 제출
/** 피드백 반영
 * 1) index.jsx는 진입점으로 컴포넌트는 아닙니다. App은 컴포넌트입니다 :)
 *  서브 미션 : 진입점과 컴포넌트 차이 이해. App이 컴포넌트인 이유 생각하고 공부하기
 *
 * 2) prototype에 접근하는게 맞나요? propTypes가 맞을 것 같군요.
 *  서브 미션 : 컴포넌트.propTypes 작성 깊이 알기. (isRequired, defaultProps)
 *  참고     : https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
 *
 * 3) App 컴포넌트에서 numbers를 알 필요가 있을까요? App 컴포넌트의 관심사는 무엇인가요?
 *   서브 미션 : Buttons 컴포넌트명 더 명확하게 바꾸기
 *
 * 4) 인라인 함수가 한줄로 표현이 가능하다면 이렇게 해주는게 좋을 것 같네요.
 * 5) 리액트 라이브러리 import와 로컬 컴포넌트 import 를 구분하기 위해 한 줄 공백을 주시면 좋을 것 같습니다~
 *    지금은 모듈이 별로 없지만, 모듈 간에도 역할이 있고, 분리를 해두는 습관을 두면 좋을 것 같습니다 :)
 *
 *   공통 미션 : 늘 다른사람이 보아도 쉽게 읽히도록 정리하기.
 */

ReactDOM.render(<App />, document.getElementById('app'));
