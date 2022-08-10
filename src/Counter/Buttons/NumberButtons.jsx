import NumberButton from './NumberButton';

export default function NumberButtons({ onButtonClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((number) => (
        <NumberButton key={number} onButtonClick={onButtonClick}>
          {number}
        </NumberButton>
      ))}
    </p>
  );
}
