import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function NumButton({ onClick, children }) {
  return (
    <button onClick={() => onClick(children)} type='button'>{children}</button>
  )
}

function Buttons({ onClick }) {
  const nums = [1, 2, 3, 4, 5];
  return (
    <div>
      {nums.map((i) => (
        <NumButton key={i} onClick={onClick}>{i}</NumButton>
      ))}
    </div>

  )
}

function MainClick({ onClick, count }) {
  return (
    <button onClick={() => onClick(1)} >Click me ({count})</button>
  )
}


function Page({ onClick, count }) {
  return (
    <div>
      <MainClick onClick={onClick} count={count} />
      <Buttons onClick={onClick} />
    </div>
  )
}

function App() {
  const [state, setState] = useState({
    count: 0
  })
  const { count } = state

  function handleClick(num) {
    setState({
      count: count + num
    })
  }

  return (
    <Page onClick={handleClick} count={count} />
  )
}
ReactDOM.render(<App />, document.getElementById('app'))