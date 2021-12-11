import Counter from './Counter';
import AddButtons from './AddButtons';

const Page = ({ count, onClick }) => (
  <>
    <p>Counter</p>
    <div>
      <Counter
        count={count}
        onClick={onClick}
      />
    </div>
    <div>
      <AddButtons step={5} onClick={onClick} />
    </div>
  </>
);

export default Page;
