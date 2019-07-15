import types from './notesActionTypes';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = notes => ({
  type: types.FETCH_SUCCESS,
  payload: notes,
});

const addNoteSuccess = note => ({
  type: types.ADD_SUCCESS,
  payload: note,
});

const deleteNoteSuccess = id => ({
  type: types.DELETE_SUCCESS,
  payload: id,
});

const updateNoteSuccess = note => ({
  type: types.UPDATE_SUCCESS,
  payload: note,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default {
  addNoteSuccess,
  deleteNoteSuccess,
  updateNoteSuccess,
  fetchRequest,
  fetchSuccess,
  fetchError,
};
