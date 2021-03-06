import React ,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Camp_card from '../components/camp_card'
import camps from '../camps'
import ProjectDetail from '../components/project-detail'
import Footer from '../components/footer'
import Header from '../components/header'
function Home() {
    const [search,setSearch] = useState()
    // console.log(camps);

    const submit=(e)=>{
            e.preventDefault()
        // let camp = camps.filter(function (e) {
        //     return e.name == search;
        // })
        // ;

        // camps=camp
        // console.log(camps);
    }
    return (
        <>
            <ProjectDetail/>
            <Header/>
            


            <div className="search container p-12 sm:p-12 lg:p-24 md:p-24  bg-slate-200">
                <h2 className='text-5xl font-bold'>Welcome to yelpCamp</h2>
                <p className='text-3xl mt-9'>View our hand-picked campgrounds from all over the world, or add your ownn</p>
                <form  className='flex mb-4 mt-9 gap-8'>
                    <input onChange={(e)=>{setSearch(e.target.value)}} className='max-w-xl w-2/3 rounded-2xl text-5xl p-4' placeholder='search for ' type="text" />
                    <button className='button h-12'  onClick={submit} type="submit">Search</button>
                </form>
                <Link href='/add-new-camp'>
                    <a className='text-3xl text-gray-600 mt-9' >or add your own campground</a>
                </Link>
            </div>

            <div className="camps grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-12 container">
               {
                   camps.map((e)=>{

                       return  <>
                       <Camp_card data={e}/>
                       </>
                       

                   })
               } 
               
               
               
            </div>
                <Footer/>
        </>
    )
}

export default Home



// rgba(249,246,241,255)