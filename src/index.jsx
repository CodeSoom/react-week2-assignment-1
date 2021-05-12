import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './Button';
import Buttons from './Buttons';

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