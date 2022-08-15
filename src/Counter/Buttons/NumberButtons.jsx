import NumberButton from './NumberButton';

export default function NumberButtons({ onClickButton }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((number) => (
        <NumberButton key={number} onClickButton={onClickButton}>
          {number}
        </NumberButton>
      ))}
    </p>
  );
}
