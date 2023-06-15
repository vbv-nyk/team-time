import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import {
  frontPostInterface,
  mainPostInterface,
  placeholderInterface,
  teamInterface,
} from "../services/types";

const placeholder: placeholderInterface = {
  "What Are We Trying To Achieve": "",
  "How To Contact Us": "",
  "Sources for More Information": "",
};

const initialState: teamInterface = {
  name: "",
  desc: "",
  img: "",
  title: "",
  createdBy: "",
  reqs: [],
  placeholder,
  id: v4(),
};

export const counterSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    updateDesc: (state, action: PayloadAction<string>) => {
      state.desc = action.payload;
    },
    updateReqs: (state, action: PayloadAction<string[]>) => {
      state.reqs = action.payload;
    },
    updateImg: (state, action: PayloadAction<string>) => {
      state.img = action.payload;
    },
    updateFrontPost: (state, action: PayloadAction<frontPostInterface>) => {
      state.img = action.payload.img;
      state.title = action.payload.title;
      state.reqs = action.payload.reqs;
      state.name = action.payload.name;
    },
    updateMainPost: (state, action: PayloadAction<mainPostInterface>) => {
      state.desc = action.payload.desc;
      state.placeholder = action.payload.placeholder;
    },
    updateAchieveReq: (state, action: PayloadAction<string>) => {
      state.placeholder["What Are We Trying To Achieve"] = action.payload;
    },
    updateContactReq: (state, action: PayloadAction<string>) => {
      state.placeholder["How To Contact Us"] = action.payload;
    },
    updateSources: (state, action: PayloadAction<string>) => {
      state.placeholder["Sources for More Information"] = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateName,
  updateDesc,
  updateReqs,
  updateImg,
  updateTitle,
  updateAchieveReq,
  updateContactReq,
  updateFrontPost,
  updateMainPost,
  updateSources,
} = counterSlice.actions;

export default counterSlice.reducer;
