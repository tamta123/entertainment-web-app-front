import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface FormState {
  firstName: string;
    email: string;
    password: string;
    // repeatPassword: string;
  }

  interface User {
    name: string,
    email: string,
    password: string
    // repeatPassword: string
  }


  interface FormSliceState {
    form: FormState;
  }
  
  const initialState: FormSliceState = {
    form: {
      firstName: "",
      email: "",
      password: "",
      // repeatPassword: "",
    },
  };

 // Thunk to handle the asynchronous post request
export const submitForm = createAsyncThunk("form/submitForm", async (formData: FormState) => {
  try {
    const response = await axios.post("https://entertainment-web-app-back-production.up.railway.app/api/register", formData);
    return response.data as User; // Adjust this based on your actual response structure
  } catch (error) {
    // Handle error scenarios
    return Promise.reject(error);
  }
});


export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Partial<FormState>>) => {
      return { ...state, form: { ...state.form, ...action.payload } }; // Adjusted to match the state structure
    },
    resetFormData: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(submitForm.fulfilled, (state, action) => {
      // Handle success scenario, if needed
    });
    builder.addCase(submitForm.rejected, (state, action) => {
      // Handle error scenario, if needed
    });
  },
});


export const { setFormData, resetFormData } = formSlice.actions;

export const selectFormData = (state: { form: FormSliceState }) => state.form.form;


export default formSlice.reducer;