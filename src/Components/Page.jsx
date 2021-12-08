import Counter from './Counter';
import IncreaseButtons from './IncreaseButtons';

const Page = ({ count, onClick }) => (
  <>
    <p>Counter</p>
    <div>
      <Counter
        count={count}
        onClick={() => onClick(1)}
      />
    </div>
    <div>
      <IncreaseButtons step={5} onClick={onClick} />
    </div>
  </>
);

export default Page;
