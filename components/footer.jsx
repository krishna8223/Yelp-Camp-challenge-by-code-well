import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
      <>
      <footer className='container'>

        <Image src="/Logo.svg" alt="Logo" width={110} height={110} />
      </footer>
      </>
  )
}

export default Footer