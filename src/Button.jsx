import React from 'react';
import ReactDOM from 'react-dom';

export default function Button({ handlerClickButton }) {
  return [1, 2, 3, 4, 5].map((i) => (
    <button onClick={() => handlerClickButton({ number: i })}>{i}</button>
  ));
}
