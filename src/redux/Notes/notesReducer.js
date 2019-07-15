import { combineReducers } from 'redux';

import types from './notesActionTypes';

function notesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload.notes;

    case types.ADD_SUCCESS:
      return [payload, ...state];

    case types.DELETE_SUCCESS:
      return state.filter(note => note.id !== payload);

    case types.UPDATE_SUCCESS:
      return state.map(note => (note.id === payload.id ? payload : note));

    default:
      return state;
  }
}

function loadingReducer(state = false, { type }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;

    case types.FETCH_SUCCESS:
    case types.FETCH_ERROR:
    case types.ADD_SUCCESS:
    case types.UPDATE_SUCCESS:
    case types.DELETE_SUCCESS:
      return false;

    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return null;

    case types.FETCH_ERROR:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  items: notesReducer,
  loading: loadingReducer,
  error: errorReducer,
});
