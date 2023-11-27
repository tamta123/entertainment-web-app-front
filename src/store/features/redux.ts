import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./personSlice";

const store = configureStore({
  reducer: {
    person: personSlice, 
    // Add other reducers if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;