// reducers/uiReducer.js
const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case "SNACKBAR_SHOW":
      return {
        ...state,
        snackbarOpen: true,
        snackbarMessage: action.message,
        snackbarSeverity: action.severity,
        snackbarDuration: action.duration,
      };
    case "SNACKBAR_CLEAR":
      return {
        ...state,
        snackbarOpen: false,
        snackbarMessage: '',
        snackbarSeverity: 'info',
        snackbarDuration: null,
      };
    default:
      return state;
  }
};

export default uiReducer;