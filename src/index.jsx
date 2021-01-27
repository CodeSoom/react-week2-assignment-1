import React, {useState} from 'react';
import ReactDom from 'react-dom';
import Page from './Page';

function App() {

  const [state, setState]  = useState({ count : 0,});

  const {count} = state;

  function handleButtonClick(i){
    console.log('handleClick()!' + i)
    setState(
    {count : count + i}
    )
  }
  function handleCounterClick(){
    console.log('handleClick()!' + 1)
    setState(
    {count : count + 1}
    )
  }

  return (
    <Page
    count = {count}
    onButtonClick={handleButtonClick}
    onCounterClick={handleCounterClick}
    />
  )

  }

  function render(){
  ReactDom.render(
<App/>,
  document.getElementById('app')
  );
}

render();

