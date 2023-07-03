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
  RESET_TYEND_REQUEST,
  // DELETE_TYEND_REQUEST,
  // DELETE_TYEND_SUCCESS,
  // DELETE_TYEND_FAILURE,
} from './tyendTypes';

export const fetchTyendRequest = (wellId) => ({
  type: FETCH_TYEND_REQUEST,
  payload: wellId,
});

export const fetchTyendSuccess = (tyends) => ({
  type: FETCH_TYEND_SUCCESS,
  payload: tyends,
});

export const fetchTyendFailure = (error) => ({
  type: FETCH_TYEND_FAILURE,
  payload: error,
});

export const createTyendRequest = (tyend) => ({
  type: CREATE_TYEND_REQUEST,
  payload: tyend,
});

export const createTyendSuccess = () => ({
  type: CREATE_TYEND_SUCCESS,
});

export const createTyendFailure = (error) => ({
  type: CREATE_TYEND_FAILURE,
  payload: error,
});

export const updateTyendRequest = (tyend) => ({
  type: UPDATE_TYEND_REQUEST,
  payload: tyend,
});

export const updateTyendSuccess = () => ({
  type: UPDATE_TYEND_SUCCESS,
});

export const updateTyendFailure = (error) => ({
  type: UPDATE_TYEND_FAILURE,
  payload: error,
});

export const resetTyendRequest = () => ({
  type: RESET_TYEND_REQUEST,
})

// export const fetchTyend = () => (dispatch) => {
//   const request = window.indexedDB.open('slideseen');

//   request.onsuccess = (event) => {
//     const db = event.target.result;
//     const transaction = db.transaction(['tyends'], 'readonly');
//     const tyendStore = transaction.objectStore('tyends');

//     const getAllRequest = tyendStore.getAll();

//     getAllRequest.onsuccess = () => {
//       const tyends = getAllRequest.result;
//       dispatch(fetchTyendSuccess(tyends));
//     };

//     getAllRequest.onerror = () => {
//       const error = getAllRequest.error;
//       dispatch(fetchTyendFailure(error));
//     };
//   };

//   request.onerror = () => {
//     const error = request.error;
//     dispatch(fetchTyendFailure(error));
//   };
// };

// Fetches the TYEND data from IndexDB
export const fetchTyend = (wellId) => (dispatch) => {
  const request = window.indexedDB.open('slideseen');

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(['tyends'], 'readonly');
    const tyendStore = transaction.objectStore('tyends');

    const getRequest = tyendStore.get(Number(wellId));

    getRequest.onsuccess = () => {
      const tyend = getRequest.result;
      console.log('tyend: ', tyend);

      if (tyend) {
        dispatch(fetchTyendSuccess(tyend));
        console.log('fetch: ', tyend);
      } else {
        dispatch(fetchTyendFailure('Tyend not found'));
        console.log('failed to fetch ')
      }
    };

    getRequest.onerror = () => {
      const error = request.error;
      dispatch(fetchTyendFailure(error));
    };
  };

  request.onerror = () => {
    const error = request.error;
    dispatch(fetchTyendFailure(error));
  };
};

// // Create the TYEND data into IndexDB
// export const createTyend = (tyend) => (dispatch) => {
//   const request = window.indexedDB.open('slideseen');

//   request.onsuccess = (event) => {
//     const db = event.target.result;
//     const transaction = db.transaction(['tyends'], 'readwrite');
//     const tyendStore = transaction.objectStore('tyends');

//     const addRequest = tyendStore.add(tyend);

//     addRequest.onsuccess = () => {
//       dispatch(createTyendSuccess());
//     };

//     addRequest.onerror = () => {
//       dispatch(createTyendFailure('Error creating tyend'));
//     };
//   };

//   request.onerror = () => {
//     dispatch(createTyendFailure('Error opening database.'));
//   };
// };

export const createTyend = (tyend) => (dispatch) => {
  const request = window.indexedDB.open('slideseen');

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(['wells', 'tyends'], 'readwrite');
    const wellStore = transaction.objectStore('wells');
    const tyendStore = transaction.objectStore('tyends');

    const getWellRequest = wellStore.get(Number(tyend.wellId));

    getWellRequest.onsuccess = () => {
      const well = getWellRequest.result;

      if (well) {
        tyend.well = well;
        console.log('tyend: ', tyend)

        const addRequest = tyendStore.add({ ...tyend, wellId: parseInt(tyend.wellId) });

        addRequest.onsuccess = () => {
          dispatch(createTyendSuccess());
        }

        addRequest.onerror = () => {
          dispatch(createTyendFailure('Error creating tyend'));
        }
      } else {
        dispatch(createTyendFailure('Well not found'));
      }
    }

    getWellRequest.onerror = (event) => {
      const error = event.target.error;
      dispatch(createTyendFailure('Error retrieving well: ' + error.message));
    }
  };

  request.onerror = () => {
    dispatch(createTyendFailure('Error opening database'));
  };
};


export const updateTyend = (tyend) => (dispatch) => {
  const request = window.indexedDB.open('slideseen');

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(['tyends'], 'readwrite');
    const tyendStore = transaction.objectStore('tyends');

    const updateRequest = tyendStore.put(tyend);

    updateRequest.onsuccess = () => {
      dispatch(updateTyendSuccess());
    };

    updateRequest.onerror = () => {
      dispatch(updateTyendFailure('Error updating tyend'));
    };
  };

  request.onerror = () => {
    dispatch(updateTyendFailure('Error opening database.'));
  };
};