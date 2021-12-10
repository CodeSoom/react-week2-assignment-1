import Button from './Button';
import Buttons from './Buttons';

export default function Page({ count, onClickOne, onClickNumber }) {
  return (
    <>
      <p>Counter</p>
      <Button count={count} onClickOne={onClickOne} />
      <Buttons onClickNumber={onClickNumber} />
    </>
  );
}
