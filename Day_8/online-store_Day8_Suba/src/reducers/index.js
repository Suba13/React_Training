import { combineReducers } from "redux";
import productReducer from "./product";
import userReducer from "./user";

const rootReducer = combineReducers({
  productState: productReducer,
  userState: userReducer
});

export default rootReducer;
