// 라이브러리 & 프레임워크
import React, { useState } from "react";
// 상수 값
import * as COUNTER_CONST from "./const/counter";
// 컴포넌트
import { CounterButton } from "./CounterButton";
import { CounterPads } from "./CounterPads";

const { counterLabel } = COUNTER_CONST;

// Counter
export function Counter() {
  const [count, setCount] = useState(0);

  function handleCounter(countNumber = 1) {
    setCount(count + countNumber);
  }
  return (
    <div>
      <p>{counterLabel}</p>
      <CounterButton count={count} onClick={handleCounter} />
      <CounterPads onClick={handleCounter} />
    </div>
  );
}
