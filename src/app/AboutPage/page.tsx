"use client"
import React from 'react'
import NavBarComponent from '../components/NavBarComponent'
import FooterComponent from '../components/FooterComponent'

const page = () => {
    return (
        <>
            <div className="min-h-screen h-full gradient grid">
                <NavBarComponent />

                <div className='mt-14 grid grid-cols-2'>
                    <div className='col-span-1 grid justify-center'>
                        <p className='text-[#9e7653] text-center'>Noteable Projects</p>

                        <div className='bg-white w-80 h-80'>

                        </div>

                        <div className='bg-white w-80 h-80'>

                        </div>
                    </div>

                    <div className='col-span-1 grid justify-center'>
                        <p className='text-[#9e7653] text-center'>Skills</p>

                        <div className='bg-white w-80 h-80'>

                        </div>

                        <div className='bg-white w-80 h-80'>

                        </div>
                    </div>
                </div>

                <div className='inline-block self-end'>
                    <FooterComponent />
                </div>

            </div>
        </>
    )
}

export default page
