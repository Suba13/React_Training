import * as actionTypes from "../actionTypes";
export function reducer(prevstate = { counter: 0 }, action) {
  switch (action.type) {
    case actionTypes.inc:
      return { counter: prevstate.counter + action.by };
    case actionTypes.dec:
      return { counter: prevstate.counter - action.by };
    default:
      return prevstate;
  }
}
