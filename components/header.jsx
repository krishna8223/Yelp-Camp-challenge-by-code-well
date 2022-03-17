import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

function Header() {
    const [isuser,setIsuser] = useState(true)

    let user;
    if (process.browser) {
        
         user = localStorage.getItem('user')
    }

    const logout = () =>{
         localStorage.removeItem('user')
         setIsuser(false)

    }

  return (
    <nav className='container flex justify-between items-center'>
                <div className="nav_left flex items-center gap-8 ">
                    <Image src="/Logo.svg" alt="Logo" width={110} height={110} />
                    <Link href={''}>
                        <a className='text-gray-600 font-semibold text-3xl' >Home</a>
                    </Link>
                </div>
                <div className="nav_right flex items-center gap-8">
                    {
                        user ?
                        <>
                        <Link href={''}>
                        <a className='font-semibold text-gray-600 text-3xl' >Abc</a>
                    </Link>
                    <Link href={''}>
                        <a onClick={logout} className=' text-gray-600 text-3xl' >Logout</a>
                    </Link>
                        </>
                    :
                    <>
                    <Link href={'/login'}>
                    <a className=' text-gray-600 text-3xl' >Login</a>
                </Link>
                    <Link href='/sign-up'>
                    {/* <a className=' text-gray-600 text-3xl' >Login</a> */}
                    <button className="button">Crate an accont</button>
                </Link>
                    </>
                    }
                </div>
            </nav>
  )
}

export default Header