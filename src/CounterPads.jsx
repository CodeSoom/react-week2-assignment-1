// 라이브러리 & 프레임워크
import React from 'react';
// 상수 값
import counter from './const/counter';

const { pads } = counter;

// 숫자 패드들
export function CounterPads({ onClick }) {
  return (
    <p>
      {pads.map((pad) => (
        <button
          type="button"
          key={pad}
          onClick={() => {
            onClick(pad);
          }}
        >
          {pad}
        </button>
      ))}
    </p>
  );
}
