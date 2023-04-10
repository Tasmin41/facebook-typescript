import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { viewPosts } from './PostSlice';
import SinglePost from './SinglePost';
import callApi from '../../utils/axios/useAPI';




const PostView = () => {
  //@ts-ignore
    const posts:any = useSelector((state)=>state.PostReducer.posts);
    console.log('post',posts)
   const dispatch = useDispatch();
    

    useEffect(() => {
      async function fetchData() {
        const response = await callApi("posts","get")
        dispatch(viewPosts(response))
      }
      fetchData();
    },[])

    
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
