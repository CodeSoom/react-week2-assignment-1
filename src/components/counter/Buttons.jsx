import React from 'react'
import Button from './Button';

const Buttons = ({onIncrement}) => {
const incrementValues = [1,2,3,4,5];

  return (
    <ul className='counterBtns'>
        {incrementValues.map((incrementValue)=> (
            <Button incrementValue={incrementValue} onIncrement={onIncrement} />
        ))}
    </ul>
  )
}

export default Buttons