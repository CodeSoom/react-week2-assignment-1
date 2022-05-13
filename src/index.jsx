import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState([1,2,3,4])
  return (
    <div>
      <p>Counter</p>
      <button onClick={()=>setCount(count+1)}>Click me!({count})
      </button>
    {
    number.map((i)=>{
        return(
        <div className="addnumber" key={i}>
            <button onClick={()=>setCount(count+i)}>{i}</button>
        </div>
        )
    })
    }
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);