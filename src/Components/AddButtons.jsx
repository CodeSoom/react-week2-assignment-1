import Button from './Button';

const AddButtons = ({ step, onClick }) => (
  <>
    {Array.from({ length: step }, (_, i) => i + 1).map((i) => (
      <Button key={i} onClick={() => onClick(i)}>
        {i}
      </Button>
    ))}
  </>
);

export default AddButtons;
