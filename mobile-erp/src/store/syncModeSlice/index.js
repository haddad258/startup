import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "Online", // Default mode
};

const syncModeSlice = createSlice({
  name: "syncMode",
  initialState,
  reducers: {
    setSyncMode: (state, action) => {
      state.mode = action.payload; // Set mode to "Online" or "Offline"
    },
  },
});

export const { setSyncMode } = syncModeSlice.actions; // Export the action
export default syncModeSlice.reducer;
