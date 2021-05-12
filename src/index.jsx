import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
  const handleClickNumberBtn = (number) => {
    setCount(count + number)
  }
  return (
    <div>
      <h2>Counter</h2>
      <button type="button" onClick={() => {
        setCount(count + 1)
      }}>Click! ({count})</button>
      <br />
      <br />
      <Buttons onHandleClickNumberBtn={handleClickNumberBtn}/>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))