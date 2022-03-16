import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Camp_card({data}) {
  return (
    <div className="camp m-7">
    <div className="camp_image rounded-4xl ">

    <Image src={data.image} alt="Logo" width={425} height={240} />

    </div>
    <h2 className="mt-4 text-4xl font-bold camp_name">{data.name}</h2>
    <p className="mt-4 mb-4 text-3xl camp_detail text-gray-600">One of the most famous hikes in bengues in Mt Ulap in Itogon</p>
    <Link href={`/camp/${data.name}`}>
    <a className='w-full flex justify-center items-center button view_Camp_button'>View Campground</a>
    </Link>
    </div>
  )
}

export default Camp_card