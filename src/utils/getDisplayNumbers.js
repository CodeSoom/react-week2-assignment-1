/**
 *
 * @returns {number[]}
 */
export default function getDisplayNumbers(length) {
  return [...(Array.from({ length }, (_, i) => i + 1))];
}
