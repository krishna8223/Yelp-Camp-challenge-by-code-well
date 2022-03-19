import React from 'react'

function Comment() {
  return (
      <>
      <div className=" text-3xl mt-8 text-gray-500 comment flex flex-col">

      <div className="username text-black flex justify-between mb-8 mt-8">
          <h2 className='font-bold'>Adam Jones</h2>
          <h2>13h ago</h2>
      </div>
      <p className='leading-snug tracking-wider'>Honestly oe of the best experience every,took us a while to figure out how to get there but it waas amazing</p>
      </div>
      </>
  )
}

export default Comment