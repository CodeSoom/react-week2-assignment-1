import React from 'react';
import { render } from 'react-dom';

const Buttons = () => (
    <div>
        {[1, 2, 3].map((i) => (<Button key={i}>{i}</Button>))}
    </div>
);

const Button = ({ children }) => (<button>{children}</button>);


const App = () => (
    <div>
        <p>Hello World !</p>
        <p>Hi</p>
        <Buttons />
    </div>
);
render(<App />, document.getElementById('app'));
