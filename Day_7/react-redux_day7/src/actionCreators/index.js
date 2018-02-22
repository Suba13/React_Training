import * as actionTypes from "../actionTypes";

export const inc = by => ({
  type: actionTypes.inc,
  by
});
export const dec = by => ({
  type: actionTypes.dec,
  by
});
