import React from 'react';

export default function Button({ i, clickhandler }) {
  return (
    <button type="button" onClick={clickhandler}>{i}</button>
  );
}
