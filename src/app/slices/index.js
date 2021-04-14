import { createSlice } from '@reduxjs/toolkit'

const initial_state = {
    view: '',
    cameras: [],
    environment: '',
    rad_deg: '',
    euler_quat: ''
};

export const indexSlice = createSlice({
  name: 'index',
  initialState: initial_state,
  reducers: {
    setView: () => {
      
    },
    addCamera: () => {
      
    },
    removeCamera: () => {
      
    },
    updateCamera: () => {

    },
    setEnvironment: () => {

    },
    setRadDeg: () => {

    },
    setEulerQuaternion: () => {

    }
  }
});

export const { increment, decrement, incrementByAmount } = indexSlice.actions;

export default indexSlice.reducer;