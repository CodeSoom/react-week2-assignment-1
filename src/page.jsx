import Button from './Button';
import Buttons from './Buttons';

const Page = ({ count, onClick }) => (
  <div>
    <p>Counter</p>
    <Button count={count} onClick={onClick} />
    <p />
    <Buttons onClick={onClick} />
  </div>
);

export default Page;
