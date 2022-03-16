import React from 'react'
import Image from 'next/image'

function Logo() {
  return (
      <>
         <Image src="/Logo.svg" alt="Logo" width={110} height={110} />
      </>
  )
}

export default Logo