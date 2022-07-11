import React from 'react';
import ReactDom from 'react-dom';
import Title from './title';
import Button from './button';
import ButtonList from './buttonList';

const root = document.getElementById('app');
const buttonNumbers = new Array(5).fill().map((_, index) => index + 1);
const initialState = {
  count: 0,
};

const App = ({ state }) => {
  const setCount = (states) => (number) => {
    ReactDom.render(
      <App state={{ ...states, count: states.count + number }} />,
      root,
    );
  };

  return (
    <>
      <Title title="Counter" />
      <Button onClick={() => setCount(state)(1)}>
        {`Click me!(${state.count})`}
      </Button>
      <ButtonList numbers={buttonNumbers} onClick={setCount(state)} />
    </>
  );
};

ReactDom.render(<App state={initialState} />, root);
