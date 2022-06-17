import Button from './Button';

export default function CountButtons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button type="button" key={i} onClick={() => onClick(i)}>{i}</Button>
      ))}
    </p>
  );
}
