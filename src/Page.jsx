import NumberButtons from './Buttons/NumberButtons';
import Counter from './Counter/App';

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <NumberButtons
        onClick={onClick}
      />
    </div>
  );
}

export default Page;
