// actions/snackbarActions.js
export const showSnackbar = (message, severity, duration) => {
  return dispatch => {
    dispatch({ 
      type: "SNACKBAR_SHOW", 
      message,
      severity,
      duration,
    });
  };
};

export const clearSnackbar = () => {
  return dispatch => {
    dispatch({ type: "SNACKBAR_CLEAR" });
  };
};