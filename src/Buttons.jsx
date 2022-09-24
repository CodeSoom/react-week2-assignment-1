import Button from './Button';

export default function Buttons({ buttonList, onClick }) {
  return (
    <p>
      {buttonList.map((i) => (
        <Button key={i} onClick={onClick} value={i}/>
      ))}
    </p>
  );
}
