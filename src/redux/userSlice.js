import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo:{
        firstname:"",
        lastname:"",
        username:"",
        phonenumber:"",
        birthday:"",
    }
}

export const userSlice = createSlice({
    name:"userInfo",
    initialState,
    reducers:{
        setFirstName:(state, action)=>{
            state.userInfo.firstname = action.payload
        },
        setLastName:(state, action)=>{
            state.userInfo.lastname = action.payload
        },
        setUserName:(state, action)=>{
            state.userInfo.username = action.payload
        },
        setPhoneNumber:(state, action)=>{
            state.userInfo.phonenumber = action.payload
        },
        setBirthday:(state, action)=>{
            state.userInfo.birthday = action.payload
        },
        resetUserInfo:(state) => {
            state.userInfo = initialState.userInfo;
        }
    }
})

export const {setFirstName, setLastName, setUserName, setBirthday, setPhoneNumber, resetUserInfo} = userSlice.actions;
export default userSlice.reducer;