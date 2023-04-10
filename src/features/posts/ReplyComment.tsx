import React,{useState} from 'react'

const ReplyComment = (props) => {

 
    const {post_id,comment_id,reply_text,reply_author}=props.singleReply;

    
    const [isLike,setIsLike]=useState(false);


    const handleLikeCount = ()=>{
      setIsLike(!isLike);
    }
 
  return (
    <div className='reply-comment'>
    <span className='profile '>

       </span>
       <div className="comment-reply-body">
           <p className='comment-text'>{reply_text}
           {
            isLike && <span className='comment-react-like'><i className='fa fa-light fa-thumbs-up'></i></span>
           }
           </p>
           <button className='comment-btn' onClick={handleLikeCount} style={isLike ? {color:'blue'} : {color:'#67656B'}}>Like</button>
           {/* <button className='comment-btn'>Reply</button> */}
       </div>
    </div>
  )
}

export default ReplyComment
