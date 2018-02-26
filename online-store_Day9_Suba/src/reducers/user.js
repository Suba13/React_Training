import { INPUT_CHANGE } from "../actionTypes/user";

export default (
  prevstate = {
    username: ""
  },
  action
) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        username: action.val
      };
    default:
      return prevstate;
  }
};
