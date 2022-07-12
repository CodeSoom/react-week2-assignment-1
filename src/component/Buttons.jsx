/* @jsx React.createElement */

import React from "react"; // 리액트 임포트 필수!
import Button from "./Button";

// 버튼 뷰 컴포넌트
// eslint-disable-next-line react/prop-types
function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        // runderButton(i)
        // eslint-disable-next-line react/no-children-prop
        <Button key={i} children={i} onClick={onClick} />
      ))}
    </p>
  );
}

export default Buttons;
