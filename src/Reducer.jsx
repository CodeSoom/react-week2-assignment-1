const States = {
  CLICKCOUNT: (state, value) => state + value,
  CLICKNUMBER: (state, value) => state + value,
};

function Reducer(state, action) {
  return States[action.type](state, action.value) || state;
}

export default Reducer;
