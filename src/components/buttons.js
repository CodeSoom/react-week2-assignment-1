import React, { useState } from 'react';
import ReactDOM from 'react-dom'

function Buttons(){
    return (
       <p>
       {[1, 2, 3, 4, 5].map((i) => (
           <Button key={i}>
               {i}
           </Button>
       ))}
       </p>
    )
}

 export default Buttons;