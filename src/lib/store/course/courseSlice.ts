import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICourse, ICourseInitialState } from "./courseSlice.type";

const initialState: ICourseInitialState = {
  course: {
    courseName: "",
    courseDescription: "",
    courseDuration: "",
  },
  status: "loading",
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourse(state, action: PayloadAction<ICourse>) {
      state.course = action.payload;
    },
    setStatus(
      state,
      action: PayloadAction<"loading" | "success" | "error">
    ) {
      state.status = action.payload;
    },
  },
});

export const { setCourse, setStatus } = courseSlice.actions;
export default courseSlice.reducer;
