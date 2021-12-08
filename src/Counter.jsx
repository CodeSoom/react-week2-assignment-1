import NumberButton from './NumberButton';
import ClickMeButton from './ClickMeButton';

const NUMBERS = [1, 2, 3, 4, 5];

export default function Counter({ count, clickHandler }) {
  return (
    <>
      <h1>Counter</h1>
      <ClickMeButton count={count} clickHandler={() => clickHandler(1)} />
      <div>
        {NUMBERS.map((number) => (
          <NumberButton
            key={number}
            number={number}
            clickHandler={() => clickHandler(number)}
          />
        ))}
      </div>
    </>
  );
}
