import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import NoteEditor from './noteEditor';

import { notesOperations } from '../../redux/notes';

const INITIAL_STATE = {
  title: '',
  content: '',
};

class NoteEditorContainer extends Component {
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
      <NoteEditor
        {...this.props}
        title={title}
        content={content}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = { addNote: notesOperations.addNote };

export default connect(null, mapDispatchToProps)(NoteEditorContainer);
