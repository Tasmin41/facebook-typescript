import React from 'react'
import PostCreate from '../features/posts/PostCreate'
import PostView from '../features/posts/PostView'

const Home = () => {
  return (
    <>
      <section>
          <div className='container'>
            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mx-auto'>
                  <PostCreate/>
                <PostView/>
                </div>
            </div>
          </div>
      </section>

    </>
  )
}

export default Home
