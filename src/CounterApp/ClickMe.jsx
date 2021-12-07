/**
 * @export
 * @param {{ count: number, onClick: () => void }} props
 * @return {import('react').ReactElement}
 */
export default function ClickMe({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me! (
      {count}
      )
    </button>
  );
}
