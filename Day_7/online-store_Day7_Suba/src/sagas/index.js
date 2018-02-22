import {
  getProductSuccess,
  getProductFailure
} from "../actionCreators/product";

import { put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS } from "../actionTypes/product";

function* getProduct() {
  let url = "http://localhost:4000/products";
  try {
    let products = yield fetch(url).then(r => r.json());
    yield put(getProductSuccess(products));
  } catch (error) {
    yield put(getProductFailure(error));
  }
}
export function* getProductsWatcher() {
  yield takeLatest(GET_PRODUCTS, getProduct);
}
