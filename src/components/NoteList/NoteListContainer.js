import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import NoteList from './NoteList';
import { notesSelectors, notesOperations } from '../../redux/Notes';
import { modalNoteActions } from '../../redux/ModalNote';

let source;

class NoteListContainer extends Component {
  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes();
    source = Axios.CancelToken.source();
  }

  componentDidUpdate() {
    source = Axios.CancelToken.source();
  }

  render() {
    return <NoteList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  notes: notesSelectors.getItems(state),
  source,
});

const mapDispatchToProps = {
  fetchNotes: notesOperations.fetchNotes,
  deleteNote: notesOperations.deleteNote,
  updateNote: notesOperations.updateNote,
  openModal: modalNoteActions.openModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteListContainer);
