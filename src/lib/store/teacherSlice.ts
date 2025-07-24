import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import API from "../http/Api";
import { IInitialTeacherData } from "@/lib/store/types";


const teacherSlice  = createSlice({
    name : "teacherSlice",
    initialState : {
        teacherName : "asdf",
        teacherPassword : "asdfadf",
    },
    reducers : {
        setTeacherName(state:IInitialTeacherData,action:PayloadAction<IInitialTeacherData>){
            state.teacherName = action.payload.teacherName
        },
        setTeacherPassword(state:IInitialTeacherData,action:PayloadAction<IInitialTeacherData>){
            state.teacherPassword = action.payload.teacherPassword
        }
    },

})

// const setTeacherName = teacherSlice.actions.setTeacherName
// const setTeacherPasssword  = teacherSlice.actions.setTeacherPassword
const {setTeacherName,setTeacherPassword} = teacherSlice.actions
export default teacherSlice.reducer
export {setTeacherName,setTeacherPassword}
// setTeacherName()
// const teacherSlice = {
// createSlice functions always returns an object jaha vitra actions haru automatic generate vayerw aairako huncha
// note : reducer ko name j xa , actions ko name pani smae tehi nahi huncha action invoke garne bitikai vitra reducer automatic call huncha



/*
FLOW

reducers ---> action

reducer --> communication --> action lai call garnu parxa
jaile pani action call huncha, reducer hune hainw


*/


function registerTeacher(){
    return async function registerTeacherThunk(){
        const response = await API.post("/api/teachers/register");
        if(response.status === 200){
            console.log("Teacher registered successfully");
        } else {
            console.error("Failed to register teacher");
        }
    }
}

export {registerTeacher}
