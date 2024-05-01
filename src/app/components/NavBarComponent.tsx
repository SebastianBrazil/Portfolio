import React from 'react'

import hambub from "@/app/assets/pinkHambub.png"

const NavBarComponent = () => {
    return (
        <div className='w-screen'>
            <div className='grid grid-cols-2'>
                <div className='col-span-1 text-left'>
                    <p className='text-pink-100'>ligma</p>
                </div>

                <div className='col-span-1 flex justify-end'>
                    <img className='w-[14%] h-auto' src={hambub.src} alt="Hamburger Menu" />
                </div>
            </div>
        </div>
    )
}

export default NavBarComponent
