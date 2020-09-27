export const increaseBySteps = (step) => (count) => step + count;

export const sequence = (upTo) => Array.from(
  { length: upTo },
  (_, i) => i + 1,
);
