import React from 'react'
import Logo from '../components/logo'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Login() {
    const router = useRouter()
    const submit = (e) =>{
        e.preventDefault()
        router.push('/login')
    }
  return (
      <>
        <div className="login flex">
            <div className="login_left h-screen w-6/12 px-52">
                <div className="header flex justify-between items-center ">
                    <Logo/>
                    <Link href='/home'>
                        <a className='text-3xl text-gray-500' href="">Back to Camp-grounds</a>
                    </Link>
                </div>
                <h1 className='text-7xl font-bold mt-40' >Start exploring camps from all around the world</h1>
                <form  className='flex flex-col mt-8'>
                    <label className='text-4xl mt-12' htmlFor="">User Name</label>
                    <input className='mt-4 w-11/12 text-4xl text-black p-4 bg-gray-100 h-24' type="text" placeholder='johndoe_91' />

                    <label className='text-4xl mt-12' htmlFor="">Password</label>
                    <input className='mt-4 w-11/12 text-4xl bg-gray-100  p-4 h-24' type="text" placeholder='Enter Your Password' />
                    <button onClick={submit} className="rounded-2xl log_in_submit button mt-20 w-full">Login</button>
                </form>
                <p className='mt-4 text-3xl text-gray-500'>Already a user <Link href="/login"><a className='font-bold text-sky-900 ' >Sign IN</a></Link></p>
            </div>

            <div className=" flex justify-center items-center login_right bg-black h-screen w-6/12">
                <div className='px-80'>
                    <h1 className='text-5xl tracking-wide font-bold'><q>YelpCamp has honestly saved my hours of research time, and the camps on here are definitely well pocked and added.</q></h1>
                    <div className=" mt-8 flex items-center user">
                    <Image src="/User Testimonial.svg" alt="Logo" width={50} height={50} />
                        <div className='ml-4'>
                            <h2 className='text-2xl font-bold'>May Andrews</h2>
                            <p className='text-xl'>Professional Hiker</p>
                        </div>
                    </div>    
                </div>

            </div>
        </div>
      </>
  )
}

export default Login