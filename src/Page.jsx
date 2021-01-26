import React from 'react';
import Button from './Button';
import Buttons from './Buttons';


function Page({ count, onClick }) {
  return (
    <div>
      <p>
        (
        {count}
        )
      </p>
      <Button
        text="Click me"
        onClick={onClick}
      />
      <br />
      <Buttons
        onClick={onClick}
      />
    </div>
  );
}

export default Page;
