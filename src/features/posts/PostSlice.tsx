import { createSlice } from "@reduxjs/toolkit"

const initialPosts = {
    posts:[]
}



const PostSlice = createSlice({
    name : "posts",
    initialState:initialPosts,
    reducers: {
        viewPosts:(state,action)=>{
        
            state.posts=action.payload
        },
        createPost:(state,action)=>{
            state.posts.unshift(action.payload)
        },
    }
})


export const {viewPosts,createPost}=PostSlice.actions;
export default PostSlice.reducer;