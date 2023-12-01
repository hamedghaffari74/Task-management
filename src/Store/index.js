import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Slice/taskSlice"
import authenticationReducer from "./Slice/authentication"
export const store = configureStore({
  reducer: {
    task : taskReducer ,
    authentication : authenticationReducer
  },
});
