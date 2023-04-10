import {useState} from 'react';
import { Input, Modal } from 'antd';
import { useDispatch} from 'react-redux';
import { viewPosts } from './PostSlice';
import callApi from '../../utils/axios/useAPI';


const PostCreate = (props) => {

  const [post,setPost] =useState("");

  const dispatch = useDispatch();

const [isModalOpen, setIsModalOpen] = useState(false);
const showModal = () => {
  setIsModalOpen(true);
};
const handleOk = async (e) => {
  e.preventDefault();

  const creatPost = await callApi("posts",'post',{user_id:3,post_desc:post,disabled:false})

  const response = await callApi("posts","get")
  dispatch(viewPosts(response))
  
  setPost("")
  setIsModalOpen(false);
};
const handleCancel = () => {
  setIsModalOpen(false);
};
  return (
    <>
    <div className='create-post'>
    <Input type="text" onClick={showModal} placeholder="Whats On Your Mind" className='form-field'/>
    </div>
    
      
   
    <Modal title="Create Post" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Create Post">
    <form className='form-create'>
         <input type="text"
         placeholder='Whats On Your Mind'
          className='form-field'
           onChange={(e)=>setPost(e.target.value)}
           value={post} required/>
      </form>
    </Modal>
  </>
  )
}

export default PostCreate
