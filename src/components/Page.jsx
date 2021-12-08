import React from 'react'
import MainClick from './MainClick.jsx'

function NumberButton({ onClick, children }) {
  return (
    <button onClick={() => onClick(children)} type='button'>{children}</button>
  )
}

function Buttons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      {numbers.map((i) => (
        <NumberButton key={i} onClick={onClick}>{i}</NumberButton>
      ))}
    </div>

  )
}


function Page({ onClick, count }) {
  return (
    <div>
      <MainClick onClick={onClick} count={count} />
      <Buttons onClick={onClick} />
    </div>
  )
}

export default Page;