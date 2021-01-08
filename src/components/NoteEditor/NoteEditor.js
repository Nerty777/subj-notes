import React from 'react';
import s from './NoteEditor.module.css';

const NoteEditor = ({ title, content, handleChange, handleSubmit }) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={s.title}
        placeholder="Title..."
        name="title"
        value={title}
        onChange={handleChange}
        required
      />
      <textarea
        className={s.text}
        rows="6"
        placeholder="Text..."
        name="content"
        value={content}
        onChange={handleChange}
      />
      <button className={s.btn} type="submit">
        Save
      </button>
    </form>
  );
};

export default NoteEditor;
