import types from './modalNoteActionTypes';

const openModal = note => ({
  type: types.OPEN_MODAL,
  payload: note,
});

const closeModal = () => ({
  type: types.CLOSE_MODAL,
});

export default { openModal, closeModal };
