import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import notesReducer from '../redux/Notes/notesReducer';
import modalReducer from '../redux/ModalNote/modalNoteReducer';
import snackbarReducer from '../redux/Snackbar/snackbarReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  notes: notesReducer,
  snackbar: snackbarReducer,
});

const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
