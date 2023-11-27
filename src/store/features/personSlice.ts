import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Person{
    firstName:string;
    email:string;
    password:string;
    photo:string
}

interface PersonState {
    persons:Person[];
}

const initialPersonState:PersonState ={
    persons: []
}

export const PersonSlice = createSlice ({
    name:"person",
    initialState:initialPersonState,
    reducers:{  updateData: (state, action:PayloadAction<{property:string, value:any}>) => {
        const { property, value } = action.payload;
          state[property] = value;
      },}
})

export const { updateData } = PersonSlice.actions;
export default PersonSlice.reducer;