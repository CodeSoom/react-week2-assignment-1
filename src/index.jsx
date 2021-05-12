import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <div>
    <h2>Counter</h2>
    <button type="button">Click! (0)</button>
    <br />
    <br />
    {[1,2,3,4,5].map(number => (
      <button type="button">{number}</button>
    ))}
  </div>
)

ReactDOM.render(<App />, document.querySelector('#app'))