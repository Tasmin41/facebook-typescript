import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { viewPosts } from './PostSlice';
import SinglePost from './SinglePost';




const PostView = () => {
  //@ts-ignore
    const posts:any = useSelector((state)=>state.PostReducer.posts);
    console.log('post',posts)
   const dispatch = useDispatch();
    

    useEffect(() => {
      async function fetchData() {
        const response = await fetch("http://localhost:3333/posts")
        const data = await response.json();
        dispatch(viewPosts(data))
      }
      fetchData();
    })

    
  return (
    <div className='post-view'>
      {
        posts &&
         posts.map((post,index)=>{
            return (
              <SinglePost post ={post} key={index} />
            )
        })
      }
      
    </div>
  )
}

export default PostView
