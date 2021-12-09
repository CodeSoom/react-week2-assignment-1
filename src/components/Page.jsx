import React from 'react'

import MainClick from './MainClick.jsx'
import Buttons from './Buttons.jsx'

function Page({ onClick, count }) {
  return (
    <div>
      <MainClick onClick={onClick} count={count} />
      <Buttons onClick={onClick} />
    </div>
  )
}

export default Page;
