import React from 'react';

import NoteEditor from '../noteEditor';
import NoteList from '../noteList';
import UpdateNoteModal from '../updateNoteModal/updateNoteModal';
import SnackbarError from '../snackbar/snackbarError';
import SnackbarSuccess from '../snackbar/snackbarSuccess';
import Loading from '../loading/loading';

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
