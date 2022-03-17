import React from 'react'
import Link from 'next/link'

import Footer from '../../components/footer'
import Header from '../../components/header'
import ProjectDetail from '../../components/project-detail'
import Image from 'next/image'
import Comment from "../../components/comment"
import camps from '../../camps'
import {useRouter} from 'next/router'


function Camp() {

    const router = useRouter()
    const {camp} = router.query

    let camp_detail = camps.filter(function (e) {
        return e.name == camp;
    });
    let name='';
    let image='';
    if(camp_detail.length==1){

     name = camp_detail[0].name 
     image = camp_detail[0].image 
    }

    return (
        <>
            <div className='flex flex-col'>

            <ProjectDetail />
            <Header />

            <div className="container gap-16 flex h-auto  single_camp">
                <div className="w-4/12 h-min map p-20  camp_detail border border-slate-300 border-solid">
                <Image src="/Map.png" alt="Logo" width={400} height={320} />
                </div>
                <div className="single_camp_right gap-16 flex flex-col w-8/12">

                <div className=" p-20  camp_detail border border-slate-300 border-solid">
                    <div className="card flex flex-col " >
                        <Image src={image || '/NONE.IMG'} alt="Logo" width={820} height={320} />
                        <div className="mt-8 text-4xl font-bold name justify-between flex">
                            <h2 className=''>{name}</h2>
                            <h1>&104.99/night</h1>
                        </div>
                        <p className='mt-8 text-4xl text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h2 className='mt-16 text-gray-500'>Submited by Andrew Mike</h2>
                    </div>
                </div>
                <div>

                <div className="review p-20   border border-slate-300 border-solid divide-solid divide-gray-300 divide-y">
                    
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <div className='flex justify-end'>
                    <Link href='/add-comment'>
                    <button  className=' mt-16 button'>Leave a Review</button>
                    </Link>
                    </div>
                </div>
                </div>
                </div>
            </div>




            <Footer />
            </div>
        </>
    )
}

export default Camp