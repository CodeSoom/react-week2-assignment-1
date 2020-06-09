import React from 'react';

export default ({ children, clickhandler }) => (
  <button type="button" onClick={clickhandler}>{children}</button>
);
