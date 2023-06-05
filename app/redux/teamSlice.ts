import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { teamInterface } from "../services/types";

const initialState: teamInterface = {
  name: "",
  desc: "",
  img: "",
  reqs: [""],
  id: v4(),
};

export const counterSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<String>) => {
      state.name = action.payload;
    },
    updateDesc: (state, action: PayloadAction<String>) => {
      state.desc = action.payload;
    },
    updateReqs: (state, action: PayloadAction<[String]>) => {
      state.reqs = action.payload;
    },
    updateImg: (state, action: PayloadAction<String>) => {
      state.img = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateName, updateDesc, updateReqs, updateImg } =
  counterSlice.actions;

export default counterSlice.reducer;
