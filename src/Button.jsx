import React from 'react'

export default ({ children, clickhandler }) => {
  return (
    <button type="button" onClick={clickhandler}>{children}</button>
  );
}