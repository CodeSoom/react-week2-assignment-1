import Button from './Button';

export default function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((buttonNumber) => (
        <Button onClick={onClick} key={buttonNumber} buttonNumber={buttonNumber} />
      ))}
    </p>
  );
}
