import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <nav className='container flex justify-between items-center'>
                <div className="nav_left flex items-center gap-8 ">
                    <Image src="/Logo.svg" alt="Logo" width={110} height={110} />
                    <Link href={''}>
                        <a className='text-gray-600 font-semibold text-3xl' >Home</a>
                    </Link>
                </div>
                <div className="nav_right flex items-center gap-8">
                    <Link href={''}>
                        <a className='font-semibold text-gray-600 text-3xl' >Johtdoe</a>
                    </Link>
                    <Link href={''}>
                        <a className=' text-gray-600 text-3xl' >Logout</a>
                    </Link>
                </div>
            </nav>
  )
}

export default Header