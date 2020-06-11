/* @jsx React.createElement */

import React from 'react';
// import React, {children} from 'react'; 하면 왜 안되지?
import ReactDOM from 'react-dom';



function Button({ children }) {
    return (<button type="button">{children}</button>);
}

function Buttons() {
    return ([1, 2, 3].map(
        (i) => 
        //선언적 프로그래밍
        <Button key={i}>{i}</Button>
    ));
}
function Apps() {
    return (
        <div>
            <p>hello world</p>
            <Buttons />
        </div>
    );
}


ReactDOM.render(<Apps />, document.getElementById('app'));
