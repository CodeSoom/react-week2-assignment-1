import NumberButton from './NumberButton';

const BUTTON_NUMBERS = [1, 2, 3, 4, 5];

function NumberButtons({ onClick }) {
  return (
    <p>
      {BUTTON_NUMBERS.map((i) => (
        <NumberButton
          key={i}
          onClick={() => onClick(i)}
          value={i}
        >
          {i}
        </NumberButton>
      ))}
    </p>
  );
}

export default NumberButtons;
