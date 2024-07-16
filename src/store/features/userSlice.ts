import {PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const backendURl = "https://entertainment-web-app-back-production.up.railway.app/api"

interface UserInfo {
  id:number;
  firstName:string;
  email:string;
  token:string
}

interface UserState {
  loading:boolean;
  userInfo:UserInfo|null;
  userToken:string|null;
  error:string|null;
  success:boolean
  isLoggedIn:boolean

}

export const registerUser = createAsyncThunk<
UserInfo,
{firstName:string,email:string,password:string,photo?:string},
{ rejectValue: string }
>('user/register', async({firstName,email,password,photo},{rejectWithValue})=>{
  try {
    const config ={
      headers:{
        "Content-Type": "application/json"
      },
    };
      const response = await axios.post(`${backendURl}/register`,{firstName,email,password,photo},config);
      return response.data
    }
   catch (error:any) {
    if(error.response && error.response.data.message){
      return rejectWithValue(error.response.data.message)
    }else{
      return rejectWithValue(error.message)
    }
  }
})

export const userLogin = createAsyncThunk
<UserInfo,
{email:string,password:string},
{ rejectValue: string }
>('user/login', async({email,password},{rejectWithValue})=>{
  try {
    const config ={
    headers:{
      "Content-Type":"application/json"
    }, 
  } 
  const response = await axios.post(`${backendURl}/login`,{email,password},config)
  // localStorage.setItem('userToken', response.data.userToken)
  return response.data;
  }catch (error:any) {
    if(error.response&&error.response.data.message){
      return rejectWithValue(error.response.data.message)
    }else{
      return rejectWithValue(error.message)
    }
  }
})

const initialState :UserState = {
  loading:false,
  userInfo:null,
  userToken:null,
  error:null,
  success:false, // for monitoring the registration process
  isLoggedIn:false
}

const userSlice =createSlice({
  name:"user",
  initialState,
  reducers:{
    resetSuccess:(state)=>{state.success=false},
    logout:(state)=>{
      state.userInfo=null;
      state.userToken=null;
      state.isLoggedIn=false;
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(registerUser.pending, (state)=>{
      state.loading=true;
      state.error=null;
    })
    .addCase(registerUser.fulfilled, (state,action:PayloadAction<UserInfo>)=>{
      state.loading=false;
      state.success=true;
      // state.userInfo=action.payload;
      state.userToken=action.payload.token
    })
    .addCase(registerUser.rejected, (state,action:PayloadAction<string|undefined>)=>{
      state.loading=false;
      state.error = action.payload ?? "Something went wrong";
    })
    .addCase(userLogin.pending,(state)=>{
      state.loading=true;
      state.error=null;
    })
    .addCase(userLogin.fulfilled,(state,action:PayloadAction<UserInfo>)=>{
      state.loading=false;
      state.userInfo=action.payload;
      state.userToken = action.payload.token; // Set userToken from the payload
      state.isLoggedIn = true; // set isLoggedIn to true on successful login
      console.log("Login fulfilled:", action.payload); // Log the payload
    })
    .addCase(userLogin.rejected, (state,action:PayloadAction<string|undefined>)=>{
      state.loading = false;
      state.error = action.payload ?? "Something went wrong";
    })
  },
})

export const {resetSuccess,logout} = userSlice.actions

export default userSlice.reducer