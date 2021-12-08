import React from 'react'

function NumButton({ onClick, children }) {
  return (
    <button onClick={() => onClick(children)} type='button'>{children}</button>
  )
}

function Buttons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      {numbers.map((i) => (
        <NumButton key={i} onClick={onClick}>{i}</NumButton>
      ))}
    </div>

  )
}

function MainClick({ onClick, count }) {
  return (
    <button onClick={() => onClick(1)} >Click me ({count})</button>
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