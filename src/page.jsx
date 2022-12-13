import React from 'react';

import Button from './button';
import Buttons from './buttons';

const Page = ({ count, onClick }) => (
  <div>
    <p>Counter</p>
    <Button count={count} onClick={onClick} />
    <p />
    <Buttons onClick={onClick} />
  </div>
);

export default Page;
