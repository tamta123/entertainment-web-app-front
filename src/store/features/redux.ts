// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieSlice';
import formReducer from "./formSlice"

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    form:formReducer
  },
});



export type RootState = ReturnType<typeof store.getState>;

export default store;