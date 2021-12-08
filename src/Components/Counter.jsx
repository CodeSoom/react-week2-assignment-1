import Button from './Button';

const Counter = ({ count, onClick }) => (
  <Button onClick={onClick}>
    Click me!
    (
    {count}
    )
  </Button>
);

export default Counter;
