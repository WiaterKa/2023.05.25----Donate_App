import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  options: [],
  finishedAt: null,
  activeQuestion: 0,
  result: 0,
  questions: [
    {
      id: 1,
      content: "Redux służy do...",
      answers: [
        {
          valid: false,
          checked: false,
          content: "Zarządzania logiką biznesową w React",
        },
        {
          valid: false,
          checked: false,
          content: "Wykonywania operacji asynchronicznych",
        },
        { valid: true, checked: false, content: "Zarządzania stanem" },
        {
          valid: false,
          checked: false,
          content: "Automatyzacji testowania komponentów",
        },
      ],
    },
    {
      id: 2,
      content: "Redux Toolkit to...",
      answers: [
        { valid: false, checked: false, content: "Middleware do obsługi API" },
        {
          valid: true,
          checked: false,
          content: "Projekt ułatwiający pracę z Redux",
        },
        { valid: false, checked: false, content: "Plugin do Chrome" },
        { valid: false, checked: false, content: "Plik konfiguracyjny Redux" },
      ],
    },
  ],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setOption: (state, action) => {
      state.options = action.payload;
    },
  },
});

export const { setOption } = formSlice.actions;

export default formSlice.reducer;
