import React, { Children, useState } from "react";
import ReactDOM from "react-dom";


function Page({ onClick, count }) {
  return (
    <button onClick={onClick} >Click Me! ({count})</button>
  )
}

function App() {
  const [state, setState] = useState({
    count: 0
  })
  const { count } = state

  function handleClick() {
    setState({
      count: count + 1
    })
  }

  return (
    <Page onClick={handleClick} count={count} />
  )
}
ReactDOM.render(<App />, document.getElementById('app'))