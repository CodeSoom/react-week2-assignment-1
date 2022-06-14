import Button from '../Button';

import createNumbers from '../../utils/createNumbers';

function Buttons({ onClick }) {
  return (
    <p>
      {createNumbers(5).map((i) => (
        <Button
          onClick={onClick}
          number={i}
          key={i}
        >
          {i}
        </Button>
      ))}
    </p>
  );
}

export default Buttons;
