import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { randomUUID } from "crypto";

export interface teamInterface {
  name: String;
  desc: String;
  img: String;
  reqs: [String];
  id: String;
}

const initialState: teamInterface = {
  name: "",
  desc: "",
  img: "",
  reqs: [""],
  id: randomUUID(),
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
