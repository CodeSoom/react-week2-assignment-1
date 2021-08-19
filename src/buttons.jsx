import Button from './button';

export default function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button
          key={i}
          value={i}
          onClick={onClick}
        />
      ))}
    </p>
  );
}
