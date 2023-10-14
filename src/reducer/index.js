import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../Slice/authSlice";
import profileReducer from "../Slice/profileSlice";
import cartReducer from "../Slice/cartSlice";
import courseReducer from "../Slice/courseSlice";
import viewCourseReducer from "../Slice/viewCourseSlice";


const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    cart:cartReducer,
    course:courseReducer,
    viewCourse:viewCourseReducer
})

export default rootReducer;