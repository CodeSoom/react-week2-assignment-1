// 라이브러리 & 프레임워크
import React from 'react';
// 상수 값
import counter from './const/counter';

const { buttonLabel } = counter;

// 카운터 버튼
export function CounterButton({ count, onClick }) {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          onClick();
        }}
      >
        {buttonLabel}({count})
      </button>
    </>
  );
}
