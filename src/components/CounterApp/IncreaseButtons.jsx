import Button from '../Button';

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
      {counts.map((count) => (
        <li key={count}>
          <Button onClick={() => onClick(count)}>
            {count}
          </Button>
        </li>
      ))}
    </ul>
  );
}
