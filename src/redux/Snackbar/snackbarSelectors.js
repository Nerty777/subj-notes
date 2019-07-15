const isOpenErrorSnackbar = state => state.snackbar.snackbarErrorIsOpen;
const isOpenSuccessSnackbar = state => state.snackbar.snackbarSuccessIsOpen;
const snackbarSource = state => state.snackbar.snackbarSource;

export default { isOpenErrorSnackbar, isOpenSuccessSnackbar, snackbarSource };
