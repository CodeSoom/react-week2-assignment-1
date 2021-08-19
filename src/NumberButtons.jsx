import NumberButton from './NumberButton';

const numbers = [1, 2, 3, 4, 5];

export default function NumberButtons({ setCount }) {
  function handleNumberClick(value) {
    setCount(value);
  }

  return (
    <p>
      {
        numbers.map((value) => (
          <NumberButton
            key={value}
            onClick={() => handleNumberClick(value)}
          >
            {value}
          </NumberButton>
        ))
      }
    </p>
  );
}
