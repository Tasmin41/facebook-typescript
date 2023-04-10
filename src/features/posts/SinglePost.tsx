import {useState} from 'react'
import Comments from './Comments';
import PostEditModal from './PostEditModal';
import callApi from '../../utils/axios/useAPI';



const SinglePost = (props) => {

    const {id,post_desc,reacts,disabled,comments}=props.post;
    const [react,setReact] = useState(reacts.length > 0 ? reacts[0].total_react : 0)
    const [disabledVal,setDisabledVal] = useState(disabled)
    



    const handleReactCount=(id)=>{

      if(reacts.length > 0){
        if(disabledVal === 0){
          setReact(react + 1)
          setDisabledVal(disabledVal+1)
          callApi(`reacts/${id}`,"post",{total_react:react+1})
        }
      else{
        setReact(react - 1)
        setDisabledVal(disabledVal - 1)
        callApi(`reacts/${id}`,"post",{total_react:react-1})
      }
      }
      else if(reacts.length === 0){
        if(disabledVal === 0){
          setReact(react + 1)
          setDisabledVal(disabledVal+1)
          callApi(`reacts/${id}`,"post",{post_id:id,total_react:react+1})

        }
      else{
        setReact(react - 1)
        setDisabledVal(disabledVal - 1)
        callApi(`reacts/${id}`,"post",{total_react:react-1})
      }
      }
    }

  return (
    <div>
                  <div className='single_post' key={id}>
                <div className='single-post-top'>
                  <p>{post_desc}</p>
                  <PostEditModal post={props.post} />
                </div>
                <div className='react-view'>
                  {
                    react > 0 && <div className="count-view">
                    <span className='clr-like' >
                        <i className="fa fa-regular fa-thumbs-up"></i>
                    </span>
                    <p>{react} </p>
                    </div>
                  }
  
                  <div className='post-bottom'>
                  <button className='react-btn' onClick={()=>handleReactCount(id)} style={disabledVal > 0 ? {color:'blue'} : {color:'#67656B'}}>
                    <span className='icon-btn'>
                      <i className="fa fa-regular fa-thumbs-up"></i>
                    </span>
                    Like
                  </button>
                  <button className='react-btn' >
                    <span className='icon-btn'>
                    <i className='fa fa-regular fa-message'></i>
                    </span>
                    {comments.length > 0 && comments.length} 

                  </button>
                  </div>
                  <Comments comment={comments} postId={id} />
                </div> 
            </div>
    </div>
  )
}

export default SinglePost
