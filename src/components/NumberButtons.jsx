export default function NumberButtons({ keypad, onClick }) {
  const numbers = Array(keypad).fill().map((_, i) => i + 1);

  const handleClickButton = (number) => {
    onClick(number);
  };

  return (
    <div>
      {numbers.map((number) => (
        <button type="button" key={number} onClick={() => handleClickButton(number)}>{number}</button>
      ))}
    </div>
  );
}
