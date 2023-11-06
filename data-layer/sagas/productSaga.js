import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_PRODUCTS } from '../actions/types';
import { fetchProductsSuccess, fetchProductsFailure } from '../actions/productActions';

function* fetchProductsSaga(action) {
  let url = "https://api.slingacademy.com/v1/sample-data/users?offset=0&limit=20";
  try {
    const response = yield call(() => axios.get(url));
    yield put(fetchProductsSuccess(response.data.users));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* productSaga() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
}

export default productSaga;