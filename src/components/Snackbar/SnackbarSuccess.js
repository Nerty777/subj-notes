import React from 'react';
import { connect } from 'react-redux';

import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { snackbarActions, snackbarSelectors } from '../../redux/snackbar';

const cancellation = (source, handleClose) => {
  source.cancel('Operation canceled by the user.');
  handleClose();
};

const SnackbarSuccess = ({ handleClose, isOpenSnackbar, source }) => {
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
        <span id="message-id" style={{ color: 'green' }}>
          You can cancel the operation
        </span>
      }
      action={[
        <Button
          key="undo"
          color="primary"
          size="medium"
          onClick={() => cancellation(source, handleClose)}
        >
          Сancel operation
        </Button>,
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
  isOpenSnackbar: snackbarSelectors.isOpenSuccessSnackbar(state),
  source: snackbarSelectors.snackbarSource(state),
});

const mapDispatchToProps = {
  handleClose: snackbarActions.closeSnackbarSuccess,
  handleClick: snackbarActions.openSnackbarSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarSuccess);
