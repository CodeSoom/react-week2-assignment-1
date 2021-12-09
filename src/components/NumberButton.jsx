import React from 'react'

function NumberButton({ onClick, number, children }) {
  return (
    <button onClick={() => onClick(number)} type='button'>{children}</button>
  )
}

export default NumberButton
