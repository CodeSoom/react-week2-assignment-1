export const increaseBySteps = (step) => (count) => step + count;

export const numbserIndexWithincreaseFunction = (upTo) => Array.from(
  { length: upTo },
  (_, i) => ({ index: i + 1, increaseByStep: increaseBySteps(i + 1) }),
);
