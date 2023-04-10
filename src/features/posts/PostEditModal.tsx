import React,{useState} from 'react'
import { Modal } from 'antd';

import { useDispatch } from 'react-redux';
import { viewPosts } from './PostSlice';
import callApi from '../../utils/axios/useAPI';

const PostEditModal = (props) => {
  const {id,post_desc}=props.post;

  const [openEditModal,setOpenEditModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch =useDispatch();

  const [postEdit,setNewPostEdit] = useState(post_desc);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async(e) => {       
    e.preventDefault();
  
    const editPost=await callApi(`posts/${id}`,'post',{post_desc:postEdit})
   
    const response = await callApi("posts","get")
    dispatch(viewPosts(response))

    setIsModalOpen(false);
    setOpenEditModal(false)
  };



const handleCancel = () => {
  setIsModalOpen(false);
  setOpenEditModal(false)
};

/*Edit Modal*/
  const handlePostCloseModal=()=>{
      setOpenEditModal(false);
  }
  const handlePostModal=()=>{
      setOpenEditModal(true)
  }

  
/*Delete Post*/
  const deletePost = async (id)=>{
    const dltResponse= await callApi(`postsDelete/${id}`,'post')

    setIsModalOpen(false);
    setOpenEditModal(false);
  
  const response = await callApi("posts","get")
  dispatch(viewPosts(response))
  }
  return (
    <div>
      <div className='post-modal'>
                  {
                  openEditModal ? 
                      <button className='post-modalbtn' onClick={handlePostCloseModal}>
                          <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></span>
                      </button>: 
                      <button onClick={handlePostModal} className='post-modalbtn'>
                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg> </span>
                      </button>
                      }
                      
                      {
                        openEditModal && 
                        
                        <div className='modal-open'>
                          <ul>
                            <li>
                              <button onClick={showModal} className="edit-btn">Edit Post</button>
                              <Modal title="Edit Post" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Edit Post">
                                <form className='form-create'>
                                    <input type="text"
                                    
                                      className='form-field'
                                      
                                      value={postEdit} onChange={(e)=>setNewPostEdit(e.target.value)}/>
                                  </form>
                                </Modal>
                              </li>
                            <li><button onClick={()=>deletePost(id)} className="edit-btn">Delete Post</button></li>
                          </ul>
                        </div>
                      }
        </div>
    </div>
  )
}

export default PostEditModal
