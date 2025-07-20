import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./types";
import API from "../http";


const userInitialState : IUserInitialState =  {
        name : "",
        address : ""
    }

const userSlice = createSlice({
    name : "userSlice",
    initialState : userInitialState,
    reducers : {
        // state --> mathi ko intialState
        // action --> trigger garda pathaune data aaune kura
        setName(state:IUserInitialState,action:PayloadAction<string>){
         state.name = action.payload //manish- data value
        },

        setAddress(state:IUserInitialState,action:PayloadAction<string>){
          state.address =  action.payload
        },
        sethaha(state:IUserInitialState,action:PayloadAction<string>){
          // console.log("haha",action.payload)
          state.name = action.payload
          // console.log("haha",state.name)

        }
    }
})




// action
const {setName,setAddress,sethaha} = userSlice.actions
export default userSlice.reducer
export {setName,setAddress,sethaha}

/*
const [name,setName] = useState(null)
const [age,setAge]
const [address,setAddress]= useState()

reducers --> kunai function jasko through bata hami kehi programmed

*/
//register user
//login user
function registerUser(){
    return async function registerUserThunk() {
        const response = await API.post("/user/register");
        if(response.status === 200){
            console.log("User registered successfully");
        } else {
            console.error("Failed to register user");
        }
    }
}

function loginUser(){
    return async function loginUserThunk() {
        const response = await API.post("/user/login");
        if(response.status === 200){
            console.log("User logged in successfully");
        } else {
            console.error("Failed to login user");
        }
    }
}

function forgotPassword(){
    return async function forgotPasswordThunk() {
        const response = await API.post("/user/forgot-password");
        if(response.status === 200){
            console.log("Password reset email sent successfully");
        } else {
            console.error("Failed to send password reset email");
        }
    }
}

function createInstitute(){
    return async function createInstituteThunk() {
        const response = await API.post("/institute/create");
        if(response.status === 200){
            console.log("Institute created successfully");
        } else {
            console.error("Failed to create institute");
        }
    }
}

export {registerUser, loginUser, forgotPassword, createInstitute};

