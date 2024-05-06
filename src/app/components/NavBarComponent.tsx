"use client"
import React from 'react'

import hambub from "@/app/assets/pinkHambub.png"
import { useRouter } from 'next/navigation';

const NavBarComponent = () => {

    const router = useRouter();
    const swapPage = (page: string) => {
        router.push(page)
    }

    return (
        <div className='w-screen'>
            <div className='grid grid-cols-2'>
                <div className='col-span-1 place-content-center'>
                    <p onClick={() => swapPage("/")} className='cursor-pointer text-[#eee7ce] text-3xl ml-5 sedan'>CodeChronicles</p>
                </div>

                <div className='col-span-1 flex justify-end'>
                    <img className='cursor-pointer' onClick={() => swapPage("AboutPage")} src={hambub.src} alt="Hamburger Menu" />
                </div>
            </div>
        </div>
    )
}

export default NavBarComponent
