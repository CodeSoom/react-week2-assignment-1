import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter( {count, onClick, key }){   //Counter 컴포넌트에서 Props 를 가져온다.
    console.log(key);
    return (
        
        <button type="button" onClick={onClick}> 
        Click me!
        (
            { count }
        )
        </button>
    )
}

function Button({ children, onClick }){
    return (
        <button 
        type="button"
        onClick={onClick}>
            {children}
        </button>
    )
}

function Buttons( {count, onClick} ) {
    return (
        <p>
            {[1, 2, 3, 4, 5].map((i) => (
                <Button 
                key={i}
                count={count}
                onClick={onClick}
                >
                    {i}
                </Button>
            ))}
        </p>
    );
}

function Page({ count, onClick }) {  //page 컴포넌트에서는 count와 onClick Props를 사용할것이다.
    return (
        <div>
            <p>Hello, world!!</p>
            <p>Hi!</p>
            <Counter        //Counter컴포넌트를 그려준다. Counter 컴포넌트로 이동해보자.
            count={count}   //count의 Props로 count를 넣어준다.
            onClick={onClick}   //onClick의 Props로 count를 넣어준다.
            />
            <Buttons 
            count={count}
            onClick={onClick}
            />
        </div>
    );
}
function App() {    //App  컴포넌트를 실행시킨다.
    const [state, setState] = useState({    //useState를 활용한다.
        count: 0,   //state의 초기값은 0이다.
    });

    const { count } = state;    //count값이 setState값으로 세팅될수있게해준다.

    function handleClick() {    //클릭할대마다 +1을 해주는함수다.
        setState({
            count: count + 1,
        });
    }

    return (
        <Page   //Page 컴포넌트를 그려준다.
        count={count}   //Page 컴포넌트에 props로 count 값을 넣어준다.
        onClick={handleClick}   //Page 컴포넌트의 onClick 의 Props로 handleClick함수로 넣어준다.
        />
    )
}

    ReactDOM.render(
        <App />,
        document.getElementById('app'),
    );

    //생각을해보자.. 그럼 key값을 받아와서 만약 버튼컴포넌트가 눌린다면 숫자 1이 늘어날게아니라
    //해당 key값을 더하면 되는거거든? 그럼 key값을 props로 받아와야하잖아?
    //일단 받아와보자