// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieSlice';
import newUserReducer from './userSlice';


export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    newUser:newUserReducer
  },
});



export type RootState = ReturnType<typeof store.getState>;

export default store;