import React from 'react';
import propTypes from 'prop-types';

function Button({ id, count, onClick }) {
  return (
    <button type="button" id={id} key={id} onClick={onClick}>
      {`${id}(${count})`}
    </button>
  );
}

Button.propTypes = {
  id: propTypes.string.isRequired,
  count: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
};

export default Button;

/** todo : missing in props validation 오류 이해하고 해결하기.
*
* 아래 esLint 오류를 해결하기위해, 'prop-types'선언했지만
  계속 오류가 출력되고 있습니다.
  *5:19  error  'id' is missing in props validation       react/prop-types
  *5:23  error  'count' is missing in props validation    react/prop-types
  *5:30  error  'onClick' is missing in props validation  react/prop-types

* 해결 방법 1: eslint-disable react/prop-types 를 추가하여 해결.
* 해결 방법 2: button의 파라미터로 props를 받아오고 const로 선언해주는 것도 해결이됨.
  (아래 주석처리한 Button함수)

  왜 Button({id, count, onClick}) 형태는 lint 오류가 나는지 추측중
  -> 아마도 props는 읽기 전용 데이터이기때문에 오브젝트로 받지 않으려 하는 것 같음
  (react props에 대해서 더 공부가 필요)

* 시도했지만 실패한 방법 : PropTypes을 선언하는 방법
 내가 작성한 함수형 컴포넌트 Button에 선언한 인자값들이 유효성 검사에 누락되었다해서
 prop-type 라이브러리를 사용해 선언해줌.

 Button.prototype = { ...} 을 선언해 주었지만 여전히 오류 메세지가 나왔다.
 이 방법이 아닌가? 생각이 들지만 리액트 공홈에도 큰 프로젝트에 권장하는 요소라 일단 삭제하지 않았다.

참고 1: https://stackoverflow.com/questions/38684925/react-eslint-error-missing-in-props-validation
참고 2: https://ko.reactjs.org/docs/typechecking-with-proptypes.html

아직 오류 missing in props validation 의 의미를 이해하지 못한것 같다.
일단 커밋하고 공부 더하기
 */

// react/prop-types 오류가 나지 않는 방식
// function Button(props) {
//   const [id, count, onClick] = props;
//   return (
//     <button type="button" id={id} key={id} onClick={onClick}>
//       {`${id}(${count})`}
//     </button>
//   );
// }
