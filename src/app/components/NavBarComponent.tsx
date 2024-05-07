"use client"
import React, { useState } from 'react'
import { Button, Drawer } from "flowbite-react";

import hambub from "@/app/assets/pinkHambub.png"
import { useRouter } from 'next/navigation';

const NavBarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    const router = useRouter();
    const swapPage = (page: string) => {
        router.push(page)
    }

    return (
        <>
            <div className='w-screen'>
                <div className='grid grid-cols-2'>
                    <div className='col-span-1 place-content-center'>
                        <p onClick={() => swapPage("/")} className='cursor-pointer text-[#eee7ce] text-2xl md:text-3xl ml-5 sedan'>CodeChronicles</p>
                    </div>

                    <div className='col-span-1 flex justify-end'>
                        <img className='cursor-pointer' onClick={() => setIsOpen(true)} src={hambub.src} alt="Hamburger Menu" />
                    </div>
                </div>
            </div>

            <Drawer className='bg-[#eee7ce]' open={isOpen} onClose={handleClose} position="right">
                <Drawer.Header titleIcon={() => <></>} />
                <Drawer.Items>
                    <div className='mt-10'>
                        <p onClick={() => swapPage("/")} className="cursor-pointer mb-10 text-2xl quando text-[#9e7653]">Home</p>
                        <p onClick={() => swapPage("AboutPage")} className="cursor-pointer text-2xl quando text-[#9e7653]">About Me</p>
                    </div>
                </Drawer.Items>
            </Drawer>
        </>
    )
}

export default NavBarComponent
