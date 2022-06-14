// 컴포넌트
import Button from '../Button';
// 유틸 함수
import createNumbers from '../../utils/CreateNumbers';

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
