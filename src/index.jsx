import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({counter, onHandleClickBtn}) => (
  <button type="button" onClick={onHandleClickBtn}>
    Click! ({counter})
  </button>
)

const Buttons = ({onHandleClickNumberBtn}) => (
  <>
    {[1,2,3,4,5].map(number => (
      <button type="button" onClick={() => onHandleClickNumberBtn(number)}>
        {number}
      </button>
    ))}
  </>
)

const App = () => {
  const [count, setCount] = useState(0);

  const handleClickBtn = () => {
    setCount(count + 1)
  }

  const handleClickNumberBtn = (number) => {
    setCount(count + number)
  }
  
  return (
    <div>
      <h2>Counter</h2>
      <Button counter={count} onHandleClickBtn={handleClickBtn} />  
      <br />
      <br />
      <Buttons onHandleClickNumberBtn={handleClickNumberBtn}/>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))