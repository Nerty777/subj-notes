import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import notesReducer from '../redux/notes/notesReducer';
import modalReducer from '../redux/modalNote/modalNoteReducer';
import snackbarReducer from '../redux/snackbar/snackbarReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  notes: notesReducer,
  snackbar: snackbarReducer,
});

const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
