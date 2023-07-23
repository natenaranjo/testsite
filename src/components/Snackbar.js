// components/SuccessSnackbar.js or whatever you wanna call it
import { useDispatch, useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";
import { clearSnackbar } from "../store/ui/uiAction";

export default function AlertsSnackbar() {
  const dispatch = useDispatch();

  const { snackbarOpen, snackbarMessage, snackbarSeverity, snackbarDuration } = useSelector(
    state => state.ui
  );

  function handleClose() {
    dispatch(clearSnackbar());
  }

  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={snackbarDuration}
      onClose={handleClose}
    >
      <Alert
        severity={snackbarSeverity}
        sx={{ width: '100%' }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
}