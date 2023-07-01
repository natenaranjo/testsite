import {
  FETCH_TYENDSREQUEST,
  FETCH_TYENDSSUCCESS,
  FETCH_TYENDSFAILURE,
  CREATE_TYEND_REQUEST,
  CREATE_TYEND_SUCCESS,
  CREATE_TYEND_FAILURE,
  UPDATE_TYEND_REQUEST,
  UPDATE_TYEND_SUCCESS,
  UPDATE_TYEND_FAILURE,
  DELETE_TYEND_REQUEST,
  DELETE_TYEND_SUCCESS,
  DELETE_TYEND_FAILURE,
} from './tyendTypes';

export const fetchSurverysRequest = () => {
  return {
    type: FETCH_TYENDS_REQUEST,
  };
};

export const fetchSurveysSuccess = (tyends) => {
  return {
    type: FETCH_TYENDS_SUCCESS,
    payload: tyends,
  };
};

export const fetchSurveysFailure = (error) => {
  return {
    type: FETCH_TYENDS_FAILURE,
    payload: error,
  };
};

export const createSurveyRequest = tyends => {
  return {
    type: CREATE_TYEND_REQUEST,
    payload: tyends,
  };
};

export const deleteSurveyRequest = tyends => {
  return {
    type: DELETE_TYEND_REQUEST,
    payload: tyends,
  };
};

export const fetchTyends = () => (dispatch) => {
  const request = window.indexedDB.open('slideseen');

  request.onsuccess = (event) => {
    const db.event.target.result;
    const transaction = db.transaction(['tyends'], 'readonly');
    const objectStore = transaction.objectStore('tyends');

    const getAllRequest = objectStore.getAll();

    getAllRequest.onsuccess = () => {
      const tyends = getAllRequest.result;
      dispatch(fetchTyendsRequest(tyends));
    };

    getAllRequest.onerror = () => {
      const error = request.error;
      dispatch(fetchTyendsFailure(error));
    };
  };

  request.onerror = () => {
    
  };
};