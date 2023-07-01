import {
  FETCH_SURVEYS_REQUEST,
  FETCH_SURVEYS_SUCCESS,
  FETCH_SURVEYS_FAILURE,
  CREATE_SURVEY_REQUEST,
  DELETE_SURVEY_REQUEST,
} from '../types';

export const fetchSurverysRequest = () => {
  return {
    type: FETCH_SURVEYS_REQUEST,
  };
};

export const fetchSurveysSuccess = (surveys) => {
  return {
    type: FETCH_SURVEYS_SUCCESS,
    payload: surveys,
  };
};

export const fetchSurveysFailure = (error) => {
  return {
    type: FETCH_SURVEYS_FAILURE,
    payload: error,
  };
};

export const createSurveyRequest = surveys => {
  return {
    type: CREATE_SURVEY_REQUEST,
    payload: surveys,
  };
};

export const deleteSurveyRequest = surveys => {
  return {
    type: DELETE_SURVEY_REQUEST,
    payload: surveys,
  };
};

export const fetchSurveys = () => (dispatch) => {
  const request = window.indexedDB.open('slideseen');

  request.onsuccess = (event) => {
    const db.event.target.result;
    const transaction = db.transaction(['surveys'], 'readonly');
    const objectStore = transaction.objectStore('surveys');

    const getAllRequest = objectStore.getAll();

    getAllRequest.onsuccess = () => {
      const surveys = getAllRequest.result;
      dispatch(fetchSurverysRequest(surveys));
    };

    getAllRequest.onerror = () => {
      const error = request.error;
      dispatch(fetchSurveysFailure(error));
    };
  };

  request.onerror = () => {
    
  };
};