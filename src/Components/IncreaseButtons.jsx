import Button from './Button';

const IncreaseButtons = ({ step, onClick }) => {
  const increasButton = [];
  for (let i = 1; i <= step; i += 1) {
    increasButton.push(<Button onClick={() => onClick(i)}>{i}</Button>);
  }
  return (
    <>
      {increasButton}
    </>
  );
};

export default IncreaseButtons;
