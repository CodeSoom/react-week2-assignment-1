import React from 'react'

function MainClick({ onClick, count }) {
  return (
    <button onClick={() => onClick(1)} >Click me ({count})</button>
  )
}

export default MainClick
