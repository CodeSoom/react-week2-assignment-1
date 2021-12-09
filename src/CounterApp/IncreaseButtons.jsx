const counts = [...Array(5).keys()].map((number) => number + 1);

/**
 * @export
 * @param {{
 *   buttons: number[],
 *   onClick: (count: number) => void,
 * }} props
 * @return {import('react').ReactElement}
 */
export default function IncreaseButtons({ onClick }) {
  return (
    <ul>
      {counts.map((button) => (
        <li key={button}>
          <button type="button" onClick={() => onClick(button)}>
            {button}
          </button>
        </li>
      ))}
    </ul>
  );
}
