import { WindowSharp } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IUser {
    id: number,
    name: string,
    lastname: string,
    username: string
    avatar: string
    telephone: string
    email: string
}
type AuthState ={
    token: string | null,
    user: null | IUser;
    isLoging: boolean;
    isLoading: boolean;
}

const initialState: AuthState = {
    token: null,
    user: null,
    isLoging: false,
    isLoading: false
}

export const loginUser = createAsyncThunk("auth/loginUser", async (data:any) => {
   const response = await axios.post("http://localhost:8000/api/auth/login", data);

   if(response.status === 200){
        window.localStorage.setItem("token", response.data.token);
       return response.data
   }

   throw new Error("Error al iniciar sesión");
});


export const registerUser = createAsyncThunk("auth/registerUser", async (data:any,thunkApi) => {
    const response = await axios.post("http://localhost:8000/api/auth/register", data);
    if(response.status === 201){
        window.localStorage.setItem("token", response.data.token);
        return response.data
    }

    return thunkApi.rejectWithValue(response.data);
})

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
    window.localStorage.removeItem("token");
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        
    },
    extraReducers:(builder: any) => {
        builder.addCase(loginUser.pending, (state:AuthState) => {
            state.isLoading = true
        })
        .addCase(loginUser.fulfilled, (state:AuthState, action:any) => {
            state.isLoading = false
            state.isLoging = true
            state.token = action.payload.token
            state.user = action.payload.user
        })
        .addCase(loginUser.rejected, (state:AuthState) => {
            state.isLoading = false
            state.isLoging = false
            state.token = null
            state.user = null

        })
        .addCase(registerUser.pending, (state:AuthState) => {
            state.isLoading = true
        })
        .addCase(registerUser.fulfilled, (state:AuthState, action:any) => {
            state.isLoading = false
            state.isLoging = true
            state.token = action.payload.token
            state.user = action.payload.user
        })
        .addCase(registerUser.rejected, (state:AuthState) => {
            state.isLoading = false
            state.isLoging = false
            state.token = null
            state.user = null
        })
        .addCase(logoutUser.fulfilled, (state:AuthState) => {
            state.isLoging = false
            state.token = null
            state.user = null
        });
    },
})

export default authSlice.reducer