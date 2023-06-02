import { db } from "./db";
import { createSlice } from '@reduxjs/toolkit';

export const tyendsSlice = createSlice({
  name: 'tyendValues',
  initialState: {
    wellId: {
      value: '',
    },
    tymd: {
      value: '',
      error: false,
      errorMessage: 'Must enter a measure depth',
    },
    tyinc: {
      value: '',
      error: false,
      errorMessage: 'Must enter a inclination',
    },
    tyazi: {
      value: '',
      error: false,
      errorMessage: 'Must enter a azimuth',
    },
    tytvd: {
      value: '',
      error: false,
      errorMessage: 'Must enter a tvd',
    },
    tyns: {
      value: '',
      error: false,
      errorMessage: 'Must enter a north or south',
    },
    tyew: {
      value: '',
      error: false,
      errorMessage: 'Must enter a east or west',
    },
    tyvs: {
      value: '',
      error: false,
      errorMessage: 'Must enter a vertical section',
    }
  },
  reducers: { 
    add: async (state) => {
      try {
        await db.tends.add({
          wellId: '1',
          tymd: '1',
          tyinc: '1',
          tyazi: '1',
          tytvd: '1',
          tyns: '1',
          tyew: '1',
          tyvs: '1',
        })
      } catch (e) {
        console.error(e);
      }
    },
    update: async (state) => {
      try {
          await db.tends.put({
            id: '1',
            name: 'test'
          })
      } catch (e) {
        console.error(e);
      }
    }
  }
});

export const { add, update } = tyendsSlice.actions

export default tyendsSlice.reducer