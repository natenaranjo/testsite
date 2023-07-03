import {
  FETCH_TYEND_REQUEST,
  FETCH_TYEND_SUCCESS,
  FETCH_TYEND_FAILURE,
  CREATE_TYEND_REQUEST,
  CREATE_TYEND_SUCCESS,
  CREATE_TYEND_FAILURE,
  UPDATE_TYEND_REQUEST,
  UPDATE_TYEND_SUCCESS,
  UPDATE_TYEND_FAILURE,
  DELETE_TYEND_REQUEST,
  DELETE_TYEND_SUCCESS,
  DELETE_TYEND_FAILURE,
  RESET_TYEND_REQUEST,
} from './tyendTypes';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const tyendReducer = (state = initialState, action) => {
  switch(action.type) {
    case DELETE_TYEND_REQUEST:
    case UPDATE_TYEND_REQUEST:
    case CREATE_TYEND_REQUEST:
    case FETCH_TYEND_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_TYEND_SUCCESS:
      return {
        ...state,
        loading: false,
        tyends: action.payload,
        error: null,
      };

    case DELETE_TYEND_SUCCESS:
    case CREATE_TYEND_SUCCESS:
    case UPDATE_TYEND_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_TYEND_FAILURE:
    case CREATE_TYEND_FAILURE:
    case UPDATE_TYEND_FAILURE:
    case FETCH_TYEND_FAILURE:
      return {
        ...state,
        laoding: false,
        error: action.payload,
      };

    case RESET_TYEND_REQUEST:
      return initialState;

      default:
        return state;
  };
};

export default tyendReducer;