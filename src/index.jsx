import React, { useState } from 'react';
import ReactDOM from 'react-dom';



function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState([1,2,3,4])
  return (
    <div>
      <p>Counter</p>
      <Button count={count} setCount={setCount}/>
      <AddtheNumber number={number} count={count} setCount={setCount}/>
    </div>
  );
}  
function Button(props){
    console.log(props)
    return (    
        
        <button onClick={()=>props.setCount(props.count+1)}>Click me!({props.count})
      </button>
    )
}
function AddtheNumber(props) {
    return (
        <div>
            {
            props.number.map((i)=>{

                return(
                <div className="addnumber" key={i}>
                    <button onClick={()=>props.setCount(props.count+i)}>{i}</button>
                </div>
                )
            })
            }
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);