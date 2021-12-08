import Counter from './Counter';
import Numbers from './Numbers';

export default function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter!</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Numbers
        onClick={onClick}
      />
    </div>
  );
}
