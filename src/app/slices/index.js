import { createSlice } from '@reduxjs/toolkit';
import { PresetViews } from '../../core/consts';

const initial_state = {
  preset_view_key: PresetViews.Iso.key,
  cameras: [],
  environment: '',
  show_axes: true,
  show_grid: true,
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
    addCamera: (state, action) => { 
        state.cameras.push(action.payload) 
    },
    removeCamera: (state, action) => { 
        state.cameras = state.cameras.filter(camera => camera.id != action.payload) 
    },
    updateCamera: (state, action) => { 
        state.cameras.find(camera => camera.id === action.payload.id && (camera[action.payload.attr] = action.payload.value, true)) 
    },
    setEnvironment: () => {

    },
    setShowAxes: (state, action) => { 
        state.show_axes = action.payload 
    },
    setShowGrid: (state, action) => { 
        state.show_grid = action.payload 
    },
    setRadDeg: () => {

    },
    setEulerQuaternion: () => {

    }
  }
});

export default indexSlice;