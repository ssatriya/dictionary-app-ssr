import { createSlice } from "@reduxjs/toolkit";

interface State {
  font: string;
  theme: string;
}

const initialState: State = {
  font: "sans",
  theme: "light",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setFont(state, action) {
      state.font = action.payload;
      localStorage.setItem("font", JSON.stringify(state.font));
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export default uiSlice.reducer;
export const { setFont, setTheme } = uiSlice.actions;
