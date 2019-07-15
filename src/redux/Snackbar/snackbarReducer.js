import { combineReducers } from 'redux';

import types from './snackbarActionTypes';

function snackbarErrorIsOpenReducer(state = false, { type }) {
  switch (type) {
    case types.OPEN_SNACKBAR_ERROR:
      return true;
    case types.CLOSE_SNACKBAR_ERROR:
      return false;

    default:
      return state;
  }
}

function snackbarSuccessIsOpenReducer(state = false, { type }) {
  switch (type) {
    case types.OPEN_SNACKBAR_SUCCESS:
      return true;
    case types.CLOSE_SNACKBAR_SUCCESS:
      return false;

    default:
      return state;
  }
}

function snackbarSourceReducer(state = null, { type, payload }) {
  switch (type) {
    case types.OPEN_SNACKBAR_SUCCESS:
      return payload;
    case types.CLOSE_SNACKBAR_SUCCESS:
      return null;

    default:
      return state;
  }
}

export default combineReducers({
  snackbarSource: snackbarSourceReducer,
  snackbarErrorIsOpen: snackbarErrorIsOpenReducer,
  snackbarSuccessIsOpen: snackbarSuccessIsOpenReducer,
});
