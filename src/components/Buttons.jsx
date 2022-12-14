import Button from './Button';

export default function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((number) => (
        <Button
          key={number}
          number={number}
          onClick={onClick}
        />
      ))}
    </p>
  );
}
