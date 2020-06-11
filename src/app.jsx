import React from 'react';
import Text from './Text';
import Buttons from './Buttons';

const App = () => {
  const components = [<Text value="Counter" />, <p />, <Buttons />];

  return (<div>{components.map((element) => element)}</div>);
};

export default App;
