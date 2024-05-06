"use client"
import React from 'react'

import hambub from "@/app/assets/pinkHambub.png"
import { useRouter } from 'next/navigation';

const NavBarComponent = () => {

    const router = useRouter();
    const swapPage = () => {
        router.push("AboutPage")
    }

    return (
        <div className='w-screen'>
            <div className='grid grid-cols-2'>
                <div className='col-span-1 place-content-center'>
                    <p className='text-[#eee7ce] sedan'>CodeChronicles</p>
                </div>

                <div className='col-span-1 flex justify-end'>
                    <img onClick={() => swapPage()} src={hambub.src} alt="Hamburger Menu" />
                </div>
            </div>
        </div>
    )
}

export default NavBarComponent
