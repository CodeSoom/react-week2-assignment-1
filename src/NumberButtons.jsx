import NumberButton from './NumberButton';

const NUMBERS = [1, 2, 3, 4, 5];

export default function NumberButtons({ clickHandler }) {
  return (
    <div>
      {NUMBERS.map((number) => (
        <NumberButton
          key={number}
          number={number}
          clickHandler={() => clickHandler(number)}
        />
      ))}
    </div>
  );
}
