import React from 'react';

import s from './NoteList.module.css';

const NoteList = ({ notes = [], deleteNote, openModal, source }) => (
  <div className={s.container}>
    {notes.map(note => (
      <div className={s.note} key={note.id}>
        <p className={s.noteTitle}>{note.title}</p>
        <p>{note.content}</p>
        <hr />
        <div className={s.btns}>
          <button
            className={s.delete}
            type="button"
            onClick={() => openModal(note)}
          >
            Update
          </button>
          <button
            className={s.delete}
            type="button"
            onClick={() => deleteNote(note.id, source)}
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default NoteList;
