import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';

import { modalNoteActions, modalNoteSelectors } from '../../redux/ModalNote';
import { notesOperations } from '../../redux/Notes';

import s from './UpdateNoteModal.module.css';

const INITIAL_STATE = {
  id: null,
  title: '',
  content: '',
};

class UpdateNoteModal extends Component {
  state = { ...INITIAL_STATE };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentDidUpdate() {
    const { isOpenModal, modalNote } = this.props;
    const { id } = this.state;
    if (isOpenModal && modalNote.id !== id) {
      this.setState({ ...modalNote });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { updateNote, closeModal } = this.props;
    updateNote(this.state);
    closeModal();
    this.setState({ ...INITIAL_STATE });
  };

  handleKeyPress = e => {
    const { closeModal } = this.props;
    if (e.code !== 'Escape') return;
    closeModal();
  };

  handleBackdropClick = e => {
    const { closeModal } = this.props;
    const { current } = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    closeModal();
  };

  render() {
    const { title, content } = this.state;
    const { isOpenModal, closeModal } = this.props;
    return (
      <>
        {isOpenModal && (
          <div
            className={s.backdrop}
            ref={this.backdropRef}
            onClick={this.handleBackdropClick}
          >
            <div className={s.modal}>
              <form className={s.form} onSubmit={this.handleSubmit}>
                <h2 className={s.mainTitle}>Update Note</h2>
                <input
                  className={s.title}
                  name="title"
                  placeholder="Title"
                  required
                  value={title}
                  onChange={this.handleChange}
                />
                <textarea
                  className={s.text}
                  name="content"
                  placeholder="Text"
                  rows="3"
                  value={content}
                  onChange={this.handleChange}
                />
                <div className={s.btns}>
                  <button className={s.btn} type="button" onClick={closeModal}>
                    Cansel
                  </button>
                  <button className={s.btn} type="submit">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isOpenModal: modalNoteSelectors.isOpenModal(state),
  modalNote: modalNoteSelectors.modalNote(state),
});
const mapDispatchToProps = {
  closeModal: modalNoteActions.closeModal,
  updateNote: notesOperations.updateNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateNoteModal);
