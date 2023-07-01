import {
  FETCH_WELLS_REQUEST,
  FETCH_WELLS_SUCCESS,
  FETCH_WELLS_FAILURE,
  CREATE_WELL_REQUEST,
  CREATE_WELL_SUCCESS,
  CREATE_WELL_FAILURE,
  DELETE_WELL_REQUEST,
  DELETE_WELL_SUCCESS,
  DELETE_WELL_FAILURE,
  UPDATE_WELL_FAILURE,
  UPDATE_WELL_SUCCESS,
  UPDATE_WELL_REQUEST,
} from './wellTypes';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const wellReducer = (state = initialState, action) => {
  switch (action.type) {

    case DELETE_WELL_REQUEST:
    case UPDATE_WELL_REQUEST:
    case CREATE_WELL_REQUEST:
    case FETCH_WELLS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_WELLS_SUCCESS:
      return {
        ...state,
        loading: false,
        wells: action.payload,
        error: null,
      };

    case DELETE_WELL_SUCCESS:
    case CREATE_WELL_SUCCESS:
    case UPDATE_WELL_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_WELL_FAILURE:
    case CREATE_WELL_FAILURE:
    case UPDATE_WELL_FAILURE:
    case FETCH_WELLS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

    default: 
      return state;
  };
};

export default wellReducer;