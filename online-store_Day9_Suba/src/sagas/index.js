import {
  getProductSuccess,
  getProductFailure,searchSuccess,searchFailure
} from "../actionCreators/product";

import { put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS,SEARCH } from "../actionTypes/product";

function* getProduct() {
  let url = "http://localhost:4000/products";
  try {
    let products = yield fetch(url).then(r => r.json());
    yield put(getProductSuccess(products));
  } catch (error) {
    yield put(getProductFailure(error));
  }
}
function* search(action) {
  console.log(action.searchitem);
  let url = `http://localhost:4000/products?productName_like=${action.searchitem}`;
  console.log(url);
  try {
    let products = yield fetch(url).then(r => r.json());
    yield put(searchSuccess(products));
  } catch (error) {
    yield put(searchFailure(error));
  }
}

export function* getProductsWatcher() {
  yield [takeLatest(GET_PRODUCTS, getProduct),takeLatest(SEARCH, search)];
}
