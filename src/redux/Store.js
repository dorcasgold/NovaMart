import { configureStore } from "@reduxjs/toolkit";
import novaReducer from './novaSlice';
export const store = configureStore({
  reducer: {
    novamart: novaReducer,
  },
});
