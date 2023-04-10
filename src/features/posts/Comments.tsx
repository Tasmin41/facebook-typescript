import { useState } from 'react'
import { useDispatch } from 'react-redux';
import SingleComment from './SingleComment';
import { viewPosts } from './PostSlice';
import callApi from '../../utils/axios/useAPI';


const Comments = (props) => {
   
    // const {postId,comentId,body}=props.comment;
    const postId = props.postId;
    
    const [comment,setComment] =useState("");


    const dispatch= useDispatch()
    

    const handleCommentSubmit=async(e)=>{
        e.preventDefault();
        const commentFetch=await callApi('comments','post',{post_id:postId,comment_text:comment}) 
        
          const response = await fetch("http://localhost:3333/posts")
          const data = await response.json();
          dispatch(viewPosts(data))

        setComment("")
        
    }
  return (
    <div>
        <div className='comment'>
            <form className='comment-form' onSubmit={handleCommentSubmit}>
                <input type="text"
                 placeholder='Write a comment....' 
                 className='comment-input'
                 value={comment}
                 onChange={(e)=>setComment(e.target.value)} required/> 
                {
                    comment && 
                    <button className='comment-submit' type='submit'>
                        <i className='fa fa-solid fa-paper-plane'></i>
                    </button>
                }
             </form>
            <div className='comment-show'>
                {
                    props.comment &&
                    props.comment.map((singleComment,index)=>{
                        return <SingleComment singleComment = {singleComment} key={index}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Comments
