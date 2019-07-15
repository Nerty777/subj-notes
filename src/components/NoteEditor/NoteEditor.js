import React, { Component } from 'react';
import Axios from 'axios';

import s from './NoteEditor.module.css';

const INITIAL_STATE = {
  title: '',
  content: '',
};

export default class NoteEditor extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { addNote } = this.props;
    e.preventDefault();
    const source = Axios.CancelToken.source();
    addNote(this.state, source);
    this.setState({
      ...INITIAL_STATE,
    });
  };

  render() {
    const { title, content } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          type="text"
          className={s.title}
          placeholder="Title..."
          name="title"
          value={title}
          onChange={this.handleChange}
          required
        />
        <textarea
          className={s.text}
          rows="6"
          placeholder="Text..."
          name="content"
          value={content}
          onChange={this.handleChange}
        />
        <button className={s.btn} type="submit">
          Save
        </button>
      </form>
    );
  }
}
