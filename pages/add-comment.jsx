import React from 'react'
import ProjectDetail from '../components/project-detail'
import Footer from '../components/footer'
import Header from '../components/header'
// import {useRouter} from 'next/router'
import { useRouter } from 'next/router'



function AddComment() {
  const router = useRouter()
  const submit = (e) =>{
    e.preventDefault()
    router.push('/home')
  }
  return (
    
      <>
        <ProjectDetail/>
        <Header/>
            <div className="  flex flex-col justify-center items-center comment">
                <h1 className='text-5xl text-center font-bold'>Add new comment</h1>
                <div className='w-1/3 flex justify-start'>
                <p className=' my-4 mt-12 text-4xl justify-start'>Description</p>
                </div>
                <form className='w-1/3'>

                <textarea placeholder='Write comment' className='m-auto h-80 w-full  p-8 text-4xl bg-gray-300'></textarea>
                <button onClick={submit} className="button add_comment_submit mt-12">Submit</button>
                </form>
            </div>


        <Footer/>

      </>

  )
}

export default AddComment