import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter</h2>
      <button type="button" onClick={() => {
        setCount(count + 1)
      }}>Click! ({count})</button>
      <br />
      <br />
      {[1,2,3,4,5].map(number => (
        <button type="button" onClick={() => {
          setCount(count + number)
        }}>{number}</button>
      ))}
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))