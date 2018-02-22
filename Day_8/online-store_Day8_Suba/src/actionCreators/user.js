import { INPUT_CHANGE } from "../actionTypes/user";

export function inputChange(val) {
  return {
    type: INPUT_CHANGE,
    val
  };
}
