import React from 'react'

function NumberButton({ onClick, children }) {
  return (
    <button onClick={() => onClick(children)} type='button'>{children}</button>
  )
}

export default NumberButton
