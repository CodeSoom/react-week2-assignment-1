import Counter from './Counter';
import Buttons from './Buttons';

export default function Page({
  count, onClick, buttonList, handleClickByNumber,
}) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons buttonList={buttonList} onClick={handleClickByNumber} />
    </div>
  );
}
