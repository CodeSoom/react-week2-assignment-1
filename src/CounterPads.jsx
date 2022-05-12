// 라이브러리 & 프레임워크
import React from "react";
// 상수 값
import * as COUNTER_CONST from "./const/counter";

const { counterPads } = COUNTER_CONST;

// 숫자 패드들
export function CounterPads({ onClick }) {
  return (
    <p>
      {counterPads.map((pad) => (
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
