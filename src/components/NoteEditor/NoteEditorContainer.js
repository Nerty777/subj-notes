import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';

import { notesOperations } from '../../redux/Notes';

const mapDispatchToProps = { addNote: notesOperations.addNote };

export default connect(
  null,
  mapDispatchToProps,
)(NoteEditor);
