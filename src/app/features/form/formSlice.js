import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  options: [],
  bags: 0,
  adressee: "",
  location: "",
  organisation: "",
  street: "",
  city: "",
  pc: "",
  mobile: "",
  date: "",
  hour: "",
  message: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setStepInc: (state) => {
      state.step += 1;
    },
    setStepDec: (state) => {
      state.step -= 1;
    },
    setStepRed: (state) => {
      state.step = 1;
    },

    setOption: (state, action) => {
      state.options = action.payload;
    },
    setBags: (state, action) => {
      state.bags = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setAdressee: (state, action) => {
      state.adressee = action.payload;
    },
    setOrganisation: (state, action) => {
      state.adressee = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setStreet: (state, action) => {
      state.street = action.payload;
    },
    setPc: (state, action) => {
      state.pc = action.payload;
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setHour: (state, action) => {
      state.hour = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const {
  setOption,
  setBags,
  setLocation,
  setAdressee,
  setOrganisation,
  setCity,
  setStreet,
  setPc,
  setMobile,
  setDate,
  setHour,
  setMessage,
  setStepInc,
  setStepDec,
  setStepRed,
} = formSlice.actions;

export default formSlice.reducer;
