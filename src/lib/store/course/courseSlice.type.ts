// Types for course slice

export interface ICourse {
  courseName: string;
  courseDescription: string;
  courseDuration: string;
}

export interface ICourseInitialState {
  course: ICourse;
  status: "loading" | "success" | "error";
}
