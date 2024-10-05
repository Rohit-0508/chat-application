import {createSlice} from '@reduxjs/toolkit'

const authSlice= createSlice({
    name:'auth',
    initialState:{
        username:'',
        email:'',
        password:'',
        isAuthenticated:false,
    },
    reducers:{
        signup:(state,action)=>{
            state.username=action.payload.usernam;
            state.email= action.payload.email;
            state.password=action.payload.password;
            state.isAuthenticated=true;
        },
        login:(state,action)=>{
            state.email=action.payload.email;
            state.password=action.payload.password;
            state.isAuthenticated=true;
        },
        logout:(state)=>{
            state.username='';
            state.email='';
            state.password='';
            state.isAuthenticated=false;
        }
    },
});

export const {signup, login, logout}=authSlice.actions;

export default authSlice.reducer;