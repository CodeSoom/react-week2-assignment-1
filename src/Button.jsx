import React from 'react';

export default ({ i, clickhandler }) => (
  <button type="button" onClick={clickhandler}>{i}</button>
);
