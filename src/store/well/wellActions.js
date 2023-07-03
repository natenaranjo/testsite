import {
  FETCH_WELLS_REQUEST,
  FETCH_WELLS_SUCCESS,
  FETCH_WELLS_FAILURE,
  CREATE_WELL_REQUEST,
  CREATE_WELL_SUCCESS,
  CREATE_WELL_FAILURE,
  UPDATE_WELL_REQUEST,
  UPDATE_WELL_SUCCESS,
  UPDATE_WELL_FAILURE,
  DELETE_WELL_REQUEST,
  DELETE_WELL_SUCCESS,
  DELETE_WELL_FAILURE,
} from './wellTypes';

export const fetchWellsRequest = () => ({
  type: FETCH_WELLS_REQUEST
});

export const fetchWellsSuccess = (wells) => ({
  type: FETCH_WELLS_SUCCESS,
  payload: wells,
});

export const fetchWellsFailure = (error) => ({
  type: FETCH_WELLS_FAILURE,
  payload: error,
});

export const createWellRequest = (well) => ({
  type: CREATE_WELL_REQUEST,
  payload: well,
});

export const createWellSuccess = () => ({
  type: CREATE_WELL_SUCCESS,
});

export const createWellFailure = (error) => ({
  type: CREATE_WELL_FAILURE,
  payload: error,
});

export const updateWellRequest = (well) => ({
  type: UPDATE_WELL_REQUEST,
  payload: well,
});

export const updateWellSuccess = () => ({
  type: UPDATE_WELL_SUCCESS,
});

export const updateWellFailure = (error) => ({
  type: UPDATE_WELL_FAILURE,
  payload: error,
});

export const deleteWellRequest = (id) => ({
  type: DELETE_WELL_REQUEST,
  payload: id,
});

export const deleteWellSuccess = () => ({
  type: DELETE_WELL_SUCCESS,
});

export const deleteWellFailure = (error) => ({
  type: DELETE_WELL_FAILURE,
  payload: error,
})

export const fetchWells = () => (dispatch) => {
  const request = window.indexedDB.open('slideseen');

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(['wells'], 'readonly');
    const wellStore = transaction.objectStore('wells');

    const getAllRequest = wellStore.getAll();

    getAllRequest.onsuccess = () => {
      const wells = getAllRequest.result;
      dispatch(fetchWellsSuccess(wells));
    };

    getAllRequest.onerror = () => {
      const error = getAllRequest.error;
      dispatch(fetchWellsFailure(error));
    };
  };

  request.onerror = () => {
    dispatch(fetchWellsFailure('Error opening database'));
  };
};

export const createWell = (well) => (dispatch) => {
  const request = window.indexedDB.open('slideseen');

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(['wells'], 'readwrite');
    const wellStore = transaction.objectStore('wells');

    const addRequest = wellStore.add(well);

    addRequest.onsuccess = () => {
      dispatch(createWellSuccess());
    };

    addRequest.onerror = () => {
      dispatch(createWellFailure('Error creating well.'));
    };
  };
  
  request.onerror = () => {
    dispatch(createWellFailure('Error opening database.'));
  };
};

export const updateWell = (well) => (dispatch) => {
  const request = window.indexedDB.open('slideseen');

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(['wells'], 'readwrite');
    const wellStore = transaction.objectStore('wells');

    const updateRequest = wellStore.put(well);

    updateRequest.onsuccess = () => {
      dispatch(updateWellSuccess());
    };

    updateRequest.onerror = () => {
      dispatch(updateWellFailure('Error updating well.'));
    };
  };

  request.onerror = () => {
    dispatch(updateWellFailure('Error opening database.'));
  };
};

// export const deleteWell = (id) => (dispatch) => {
//   const request = window.indexedDB.open('slideseen');

//   request.onsuccess = (event) => {
//     const db = event.target.result;
//     const transaction = db.transaction(['wells'], 'readwrite');
//     const wellStore = transaction.objectStore('wells');

//     const deleteRequest = wellStore.delete(id);

//     deleteRequest.onsuccess = () => {
//       dispatch(deleteWellSuccess());
//     };

//     deleteRequest.onerror = () => {
//       dispatch(deleteWellFailure('Error deleting well.'));
//     };
//   };

//   request.onerror = () => {
//     dispatch(deleteWellFailure('Error opening database.'));
//   };
// };

export const deleteWell = (id) => (dispatch) => {
  const request = window.indexedDB.open('slideseen');

  request.onsuccess = (event) => {
    const db = event.target.result;

    // Start a transaction for deleting the well and related tables
    const transaction = db.transaction(['wells', 'tyends'], 'readwrite');
    const wellStore = transaction.objectStore('wells');
    const tyendStore = transaction.objectStore('tyends');

    // Delete the well from the wells table
    const deleteWellRequest = wellStore.delete(id);

    // Delete the associated records from the tyends table
    const deleteTyendsRequest = tyendStore.index('wellIdRef').openCursor(IDBKeyRange.only(id));

    // Handle the success event for deleting the well
    deleteWellRequest.onsuccess = () => {
      dispatch(deleteWellSuccess());
    };

    // Handle the error event for deleting the well
    deleteWellRequest.onerror = () => {
      dispatch(deleteWellFailure('Error deleting well.'));
    };

    // Handle the success event for deleting the tyends
    deleteTyendsRequest.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        // Delete the current record
        cursor.delete();
        // Move to the next record
        cursor.continue();
      }
    };

    // Handle the error event for deleting the tyends
    deleteTyendsRequest.onerror = () => {
      dispatch(deleteWellFailure('Error deleting related records.'));
    };

    // Commit the transaction
    transaction.oncomplete = () => {
      console.log('Transaction completed');
    };

    // Rollback the transaction if an error occurs
    transaction.onerror = () => {
      console.log('Transaction failed');
    };
  };

  request.onerror = () => {
    dispatch(deleteWellFailure('Error opening database.'));
  };
};