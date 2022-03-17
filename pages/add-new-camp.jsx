import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import ProjectDetail from '../components/project-detail'
import { useRouter } from 'next/router'


function addNewCamp() {
    const router = useRouter()

    const submit = (e) =>{
        e.preventDefault()
        router.push('/home')
    }

    return (
        <>
                <ProjectDetail />
                <Header />

            <div className=" w-2/5 m-auto add">
                <h1 className='font-bold text-6xl'>Add new Campground</h1>
                <form className='flex flex-col mt-8'>
                    <label className='text-4xl mt-12 text-gray-500' htmlFor="">Campground Name</label>
                    <input className='mt-6 w-11/12 text-4xl text-black p-8 bg-gray-100 h-24' type="text" placeholder='Seven sisters waterfall' />
                    <label className='text-gray-500 text-4xl mt-12' htmlFor="">Price</label>
                    <input className='mt-6 w-11/12 text-4xl text-black p-8 bg-gray-100 h-24' type="text" placeholder='$149' />

                    <label className='text-gray-500 text-4xl mt-12' htmlFor="">Image</label>
                    <input className='mt-6 w-11/12 text-4xl text-black p-8 bg-gray-100 h-24' type="text" placeholder='www.image.com' />
                    <label className='text-gray-500 text-4xl mt-12' htmlFor="">Description</label>
                    <textarea placeholder='Enter campground detail' className='mt-6 w-11/12 text-4xl text-black p-4 bg-gray-100 h-60' ></textarea>
                    <button onClick={submit} className="rounded-2xl add_new_submit button mt-20 w-full">Add new campground</button>
                </form>
            </div>

                <Footer />
        </>
    )
}

export default addNewCamp