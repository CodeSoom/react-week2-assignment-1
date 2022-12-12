import React from 'react'

const Button = ({incrementValue, onIncrement, children}) => {

  return (
    <li>
        <button onClick={() => onIncrement(incrementValue)}>
           {children} {incrementValue}
        </button>
    </li> 
  )
}

export default Button