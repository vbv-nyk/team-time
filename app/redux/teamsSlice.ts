import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { teamInterface } from "./teamSlice";

export enum filterType {
  role,
  views,
  popularity,
}

export interface teamsInterface {
  teams: teamInterface[];
}

const initialState: teamsInterface = {
  teams: [],
};

export const counterSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    addTeam: (state, action: PayloadAction<teamInterface>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.teams.push(action.payload);
    },
    removeTeam: (state, action: PayloadAction<String>) => {
      state.teams.filter((team) => team.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTeam, removeTeam } = counterSlice.actions;

export default counterSlice.reducer;
