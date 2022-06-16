export default function CountButton({ onClick, count }) {
  const handleClickButton = () => {
    onClick();
  };

  return (
    <button type="button" onClick={handleClickButton}>
      Click me!
      (
      {count}
      )
    </button>
  );
}
