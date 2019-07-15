import axios from 'axios';
import * as API from '../../services/api';
import actions from './notesActions';
import { snackbarActions } from '../Snackbar';

const fetchNotes = () => async dispatch => {
  dispatch(actions.fetchRequest());
  try {
    const data = await API.getAllItems();
    dispatch(actions.fetchSuccess(data));
  } catch (error) {
    dispatch(actions.fetchError(error));
    dispatch(snackbarActions.openSnackbarError(error));
  }
};

const addNote = (note, source) => dispatch => {
  dispatch(actions.fetchRequest());
  dispatch(snackbarActions.openSnackbarSuccess(source));
  async function add() {
    try {
      const data = await API.addItem(note, source);
      if (data) {
        dispatch(actions.addNoteSuccess(data));
      } else {
        throw new Error('error add item!');
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request add note canceled.', error.message);
        dispatch(actions.fetchError(error));
      } else {
        dispatch(actions.fetchError(error));
        dispatch(snackbarActions.openSnackbarError(error));
      }
    }
  }
  setTimeout(add, 3000);
};

const deleteNote = (id, source) => dispatch => {
  dispatch(actions.fetchRequest());
  dispatch(snackbarActions.openSnackbarSuccess(source));
  async function deletion() {
    try {
      const data = await API.deleteItem(id, source);
      if (data) {
        dispatch(actions.deleteNoteSuccess(id));
      } else {
        throw new Error('error delete item!');
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request delete note canceled.', error.message);
        dispatch(actions.fetchError(error));
      } else {
        dispatch(actions.fetchError(error));
        dispatch(snackbarActions.openSnackbarError(error));
      }
    }
  }
  setTimeout(deletion, 3000);
};

const updateNote = note => async dispatch => {
  dispatch(actions.fetchRequest());
  try {
    const data = await API.updateItem(note);
    console.log('data: ', data);
    if (data) {
      dispatch(actions.updateNoteSuccess(note));
    } else {
      throw new Error('error update item!');
    }
  } catch (error) {
    dispatch(actions.fetchError(error));
    dispatch(snackbarActions.openSnackbarError(error));
  }
};

export default { fetchNotes, addNote, deleteNote, updateNote };
