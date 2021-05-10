import React ,{ useState }from 'react';
import ReactDOM, { render } from 'react-dom';

// 클릭미 버튼 컴포넌트
function ClickMeButton({count, onClick}) {
    return (
        <p>
          <button 
          type="button"
          onClick={onClick}>
            Click me! 
           (
            {count}
            )
          </button>
        </p>
    );
}

// 숫자버튼 컴포넌트 
function NumberButton(props) {
    return (
        <button type="button">
            {props.value}
        </button>
    );
}

function NumberButtons() {
    return (
        <p>
            {[1, 2, 3, 4, 5].map((value) => (
                <NumberButton value={value} />
            ))}
        </p>
    );
}

// 리액트가 UI를 그려주는 부분
function App() {
    const [state, setState] = useState({
        count: 0,
    });

    const {count} = state;

    function handelOnClick() {
        setState({
            count: count + 1,
        });
    }

    return (
        <div>
            <p>Counter</p>
            <ClickMeButton 
            count={count}
            onClick={handelOnClick}/>
            <NumberButtons />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
