import React from 'react'

import Buttons from './Buttons.jsx'
import NumberButton from './NumberButton.jsx';

function Page({ onClick, count }) {
  return (
    <div>
      <NumberButton onClick={onClick} number={1} >Click me ({count})</NumberButton>
      <Buttons onClick={onClick} />
    </div>
  )
}

export default Page;
