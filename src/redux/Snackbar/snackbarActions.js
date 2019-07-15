import types from './snackbarActionTypes';

const openSnackbarError = () => ({
  type: types.OPEN_SNACKBAR_ERROR,
});

const closeSnackbarError = () => ({
  type: types.CLOSE_SNACKBAR_ERROR,
});

const openSnackbarSuccess = source => ({
  type: types.OPEN_SNACKBAR_SUCCESS,
  payload: source,
});

const closeSnackbarSuccess = () => ({
  type: types.CLOSE_SNACKBAR_SUCCESS,
});

export default {
  openSnackbarError,
  closeSnackbarError,
  openSnackbarSuccess,
  closeSnackbarSuccess,
};
