import Button from './Button';

const Adder = ({ step, onClick }) => (
  <Button onClick={onClick}>
    {step}
  </Button>
);

export default Adder;
