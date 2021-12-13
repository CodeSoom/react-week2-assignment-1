export function range({ start, end, size }) {
  const startAt = start ?? 0;
  const endAt = end ?? startAt + size;
  const array = [];
  for (let i = startAt; i <= endAt; i += 1) {
    array.push(i);
  }
  return array;
}

export default {
  range,
};
