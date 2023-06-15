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
    removeReq: (state, action: PayloadAction<number>) => {
      state.reqs = state.reqs.filter((req, i) => i != action.payload);
    },
    updateReqName: (state, action: PayloadAction<string>) => {
      state.reqs.push({ name: action.payload, desc: "" });
    },
    updateReqDesc: (
      state,
      action: PayloadAction<{ name: string; desc: string }>
    ) => {
      const reqIndex = state.reqs.findIndex(
        (req) => req.name == action.payload.name
      );
      state.reqs[reqIndex].desc = action.payload.desc;
    },
    updateImg: (state, action: PayloadAction<string>) => {
      state.img = action.payload;
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
  updateImg,
  updateTitle,
  updateReqName,
  updateReqDesc,
  updateAchieveReq,
  updateContactReq,
  updateSources,
  removeReq,
} = counterSlice.actions;

export default counterSlice.reducer;
