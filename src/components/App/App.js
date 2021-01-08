import React from 'react';
import NoteEditor from '../NoteEditor';
import NoteList from '../NoteList';
import UpdateNoteModal from '../UpdateNoteModal/UpdateNoteModal';
import SnackbarError from '../Snackbar/SnackbarError';
import SnackbarSuccess from '../Snackbar/SnackbarSuccess';
import Loading from '../Loading/Loading';

function App() {
  return (
    <>
      <NoteEditor />
      <NoteList />
      <UpdateNoteModal />
      <SnackbarError />
      <SnackbarSuccess />
      <Loading />
    </>
  );
}

export default App;
