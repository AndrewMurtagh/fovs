import { createSlice } from '@reduxjs/toolkit';
import { PresetViews } from '../../core/consts';

const initial_state = {
  preset_view_key: PresetViews.Iso.key,
  cameras: [],
  environment: '',
  rad_deg: '',
  euler_quat: ''
};

export const indexSlice = createSlice({
  name: 'index',
  initialState: initial_state,
  reducers: {
    setView: (state, action) => {
      state.preset_view_key = action.payload
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

export default indexSlice;
// export const { increment, decrement, incrementByAmount } = indexSlice.actions;

// export default indexSlice.reducer;