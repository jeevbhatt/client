import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IIncomingUserPayload, IInitialStudentData } from "./types";


const initialStudentData:IInitialStudentData = {
    data : {
        name: "",
        address: "",
        age: 0
    }
}// here is the initial state for the student slice was updated
//  to match the IInitialStudentData interface

const studentSlice = createSlice({
    name : "studentSlice",
    initialState : initialStudentData,
    reducers : {
        setData(state:IInitialStudentData, action:PayloadAction<IIncomingUserPayload>){
            state.data = action.payload // {
//     name : "manish",
//     address : "itahari",
//     age : 23
// }
        },
    }
})
// reducerName -- actionName
const {setData} = studentSlice.actions
 // dispatch(setData({
 //     name : "manish",
 //     address : "itahar",
 //     age : 23
 // }))
export {setData}
export default studentSlice.reducer

function setName(){

}
setName();
setData({
    name : "manish",
    address : "itahari",
    age : 23
});
