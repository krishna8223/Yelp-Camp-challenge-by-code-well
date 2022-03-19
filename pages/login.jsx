import React , {useState} from 'react'
import Logo from '../components/logo'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'



function Login() {
    const router = useRouter()
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [wrong,setwrong] = useState(false)
    const submit = (e) =>{
        e.preventDefault()
            if(username == 'abc' && password=='abc'){
                localStorage.setItem('user','abc')
                console.log('sucess');
                router.push('/home')
            }else{
                setwrong(true)
                setTimeout(() => {
                    setwrong(false)
                }, 5000);
            }
    }
  return (
      <>
        <div className="login flex flex-col lg:flex-row">
            <div className="login_left h-fit lg:h-screen  lg:w-6/12  w-full lg:px-40 md:px-24 px-16">
                <div className="header flex justify-between items-center ">
                    <Logo/>
                    <Link href='/home'>
                        <a className='text-3xl text-gray-500' href=""> Back to Camp-grounds</a>
                    </Link>
                </div>
                <h1 className='text-7xl font-bold lg:mt-40 mt-8' >Start exploring camps from all around the world</h1>
                <h2 className='text-4xl mt-4 bg-slate-400 p-2'>Use: Username = abc & password = abc</h2>
                <form  className='flex flex-col mt-8'>
                    <label className='text-4xl mt-12' htmlFor="">User Name</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} className='max-w-5xl mt-4 w-11/12 text-4xl text-black p-4 bg-gray-100 h-24' type="text" placeholder='johndoe_91' />

                    <label className='text-4xl mt-12' htmlFor="">Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} className='max-w-5xl mt-4 w-11/12 text-4xl bg-gray-100  p-4 h-24' type="text" placeholder='Enter Your Password' />
                    <button onClick={submit} className="rounded-2xl log_in_submit button max-w-5xl mt-20 w-full">Login</button>
                </form>
                {
                    wrong?
                <h2 className='text-4xl mt-4 bg-slate-500 p-2' >Wront Credentials .. PLease Use: Username = abc & password = abc </h2>
                :''
                }

                <p className='mt-4 text-3xl text-gray-500'>Not a user yet <Link href="/sign-up"><a className='font-bold text-sky-900 ' >Create an account</a></Link></p>
            </div>

            <div className=" flex justify-center items-center login_right bg-black h-fit lg:h-screen p-20 mt-20 lg:mt-0 lg:p-0 lg:w-6/12  w-full">
                <div className='lg:px-40 sm:px-40 px-4'>
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