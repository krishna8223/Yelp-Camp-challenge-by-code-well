import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
    const [isuser, setIsuser] = useState(true);

    let user;
    if (process.browser) {
        user = localStorage.getItem("user");
        // console.log(nav);
        const nav = document.getElementsByTagName('nav')
        // window.addEventListener('scroll',(e)=>{
        //     console.log(window.scrollY);
        //     if(window.scrollY>'34'){
        //         nav[0].style.position='fixed'
        //         nav[0].style.top='0'
        //         // nav[0].style.left='0'
        //         nav[0].style.width='80%'
        //         nav[0].style.margin='auto'
        //         nav[0].style.backdropFilter='blur(20px)'
        //         nav[0].style.zIndex='10000'
        //         // nav[0].style.backgroundColor='#fff'
        //     }else if(window.scrollY<'34'){
        //         nav[0].style.position='unset'

        //     }
        // })
    }

    const logout = () => {
        localStorage.removeItem("user");
        setIsuser(false);
    };

    const header = () => {
        const nav_right = document.getElementsByClassName('nav_right')
        if(nav_right[0].style.transform == 'translateX(100%)'){

            // nav_right[0].style.display = 'flex'
            nav_right[0].style.transform = 'translateX(0)'
        }else{

            // nav_right[0].style.display = 'none'
            nav_right[0].style.transform = 'translateX(100%)'

        }
        // nav_right[0].style.display = 'block'
    }

    return (
        <>

            <div className="container">
            
        <nav className=" flex justify-between items-center">
        
            <div className="nav_left self-start flex items-center gap-8 ">
                <Link href='/'>
                    <div className="header_logo cursor-pointer">
                        
                <Image src="/Logo.svg" alt="Logo" width={110} height={110} />
                    </div>
                </Link>
                <Link href="/home">
                    <a className="text-gray-600 font-semibold text-3xl">Home</a>
                </Link>
            </div>
            <div className="hamburger_div flex items-center">

                <img src="/Hamburger Menu.svg" onClick={header} alt="" className="hambergur" />
            </div>
            <div className="nav_right flex items-center gap-8">
                {user ? (
                    <>
                        <Link href={""}>
                            <a className="font-semibold text-gray-600 text-3xl">Abc</a>
                        </Link>
                        <Link href={""}>
                            <a onClick={logout} className=" text-gray-600 text-3xl">
                                Logout
                            </a>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href={"/login"}>
                            <a className=" text-gray-600 text-3xl">Login</a>
                        </Link>
                        <Link href="/sign-up">
                            {/* <a className=' text-gray-600 text-3xl' >Login</a> */}
                            <button className="button">Crate an accont</button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
            
        </div>
        </>
    );
}

export default Header;
