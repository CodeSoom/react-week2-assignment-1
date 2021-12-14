import Button from './Button';

import { range } from './js/utils';

export default function Buttons({ onClick }) {
  return (
    <p>
      {range({ start: 1, end: 5 }).map((i) => (
        <Button key={i} onClick={() => onClick(i)}>
          {i}
        </Button>
      ))}
    </p>
  );
}
