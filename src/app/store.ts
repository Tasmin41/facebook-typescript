import { configureStore } from "@reduxjs/toolkit";

import PostReducer from "../features/posts/PostSlice";


const store = configureStore({
    reducer:{
        PostReducer:PostReducer,
        
    }
})
export default store