"use client"
import React from 'react'
import titleImg from "../assets/book.png"

const NavBarComponent = () => {
    return (
        <>
            <div className='w-screen'>
                <div className='grid'>
                    <div className='my-4'>
                        <div className='flex flex-row ml-5'>
                            <img className='mt-[2px] w-7 h-9' src={titleImg.src} alt="" />
                            <p className='text-[#eee7ce] ml-2 text-2xl md:text-3xl sedan'>CodeChronicles</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Defunct */}

            {/* <div className='w-screen'>
                <div className='grid grid-cols-2'>
                    <div className='col-span-1 place-content-center'>
                        <p onClick={() => swapPage("/")} className='cursor-pointer text-[#eee7ce] text-2xl md:text-3xl ml-5 sedan'>CodeChronicles</p>
                    </div>

                    <div className='col-span-1 flex justify-end'>
                        <img className='cursor-pointer' onClick={() => setIsOpen(true)} src={hambub.src} alt="Hamburger Menu" />
                    </div>
                </div>
            </div> */}

            {/* <Drawer className='bg-[#eee7ce]' open={isOpen} onClose={handleClose} position="right">
                <Drawer.Header titleIcon={() => <></>} />
                <Drawer.Items>
                    <div className='mt-10'>
                        <p onClick={() => swapPage("/")} className="cursor-pointer mb-10 text-2xl quando text-[#9e7653]">Home</p>
                        <p onClick={() => swapPage("AboutPage")} className="cursor-pointer text-2xl quando text-[#9e7653]">About Me</p>
                    </div>
                </Drawer.Items>
            </Drawer> */}
        </>
    )
}

export default NavBarComponent
