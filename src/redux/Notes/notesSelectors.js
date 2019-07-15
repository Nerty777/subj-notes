const getItems = state => state.notes.items;
const getErrorMessage = state => state.notes.error && state.notes.error.message;
const getLoading = state => state.notes.loading;

export default { getItems, getErrorMessage, getLoading };
