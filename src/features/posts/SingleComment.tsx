import React, { useState } from 'react';
import AddReplyComment from './AddReplyComment';
import ReplyComment from './ReplyComment';

const SingleComment = (props) => {

    const {id,post_id,comment_text,comment_author,replies}=props.singleComment;



    // const singleReply = replies[0];
    // console.log(singleReply)
    const [isLike,setIsLike]=useState(false);
    const [isReply,setIsReply] = useState(false);


    const handleLikeCount = ()=>{
      setIsLike(!isLike);
    }
    const handleReplyComment = ()=>{
      setIsReply(!isReply)
    }

  return (
    <div className='single-comment'>
    <span className='profile '>

       </span>
       <div className="comment-body">
           <p className='comment-text'>{comment_text}
           {
            isLike && <span className='comment-react-like'><i className='fa fa-light fa-thumbs-up'></i></span>
           }
           
           </p>
           <button className='comment-btn' onClick={handleLikeCount} style={isLike ? {color:'blue'} : {color:'#67656B'}}>Like</button>
           <button className='comment-btn' onClick={handleReplyComment}>Reply</button>
      

           {
            replies && 
            replies.map((singleReply,index)=>{
              
              return <ReplyComment singleReply={singleReply} key={index}/>
            })
           }
           {
            isReply && <AddReplyComment addReply={replies} post_id={post_id} comment_id={id}/>
           }


       </div>
    </div>
  )
}

export default SingleComment
