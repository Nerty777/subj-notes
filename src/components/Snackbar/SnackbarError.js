import React from 'react';
import { connect } from 'react-redux';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { notesSelectors } from '../../redux/notes';
import { snackbarActions, snackbarSelectors } from '../../redux/snackbar';

const SnackbarError = ({ snackbarMessage, handleClose, isOpenSnackbar }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={isOpenSnackbar}
      autoHideDuration={2000}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={
        <span id="message-id" style={{ color: 'red' }}>
          {snackbarMessage}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  );
};

const mapStateToProps = state => ({
  snackbarMessage: notesSelectors.getErrorMessage(state),
  isOpenSnackbar: snackbarSelectors.isOpenErrorSnackbar(state),
});

const mapDispatchToProps = {
  handleClose: snackbarActions.closeSnackbarError,
  handleClick: snackbarActions.openSnackbarError,
};

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarError);
