import Button from './Button';

const Counter = ({ count, onClick }) => (
  <Button onClick={() => onClick(1)}>
    Click me!
    (
    {count}
    )
  </Button>
);

export default Counter;
