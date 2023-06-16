import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ThemeOption } from "../services/types";

const initialState = {
  currentTheme: ThemeOption.CLEAN,
  editing: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setEditing: (state, action: PayloadAction<boolean>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.editing = action.payload;
    },
    setTheme: (state, action: PayloadAction<ThemeOption>) => {
      state.currentTheme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEditing, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
