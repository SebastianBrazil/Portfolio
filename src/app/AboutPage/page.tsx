"use client"
import React from 'react'
import NavBarComponent from '../components/NavBarComponent'
import FooterComponent from '../components/FooterComponent'
import me from "../assets/me.jpg"
import notme from "../assets/git.png"

const page = () => {
    return (
        <>
            <div className="min-h-screen h-full gradient grid">
                <NavBarComponent />

                <div className='my-14'>
                    <p className='text-[#9e7653] my-4 text-4xl text-center quando pb-10'>ABOUT ME</p>
                    <div className='flex justify-center max-lg:px-10'>
                        <p className='quando text-2xl text-[#9e7653] lg:w-[40%] mr-20'>I, Sebastian Breve-Sanchez, am a web developer. I currently attend CodeStack Academy, where I was first taught how to code. From here I learned all of my current programming skillset, which ranges from Unity to fullstack web development. I have experience with frontend languages such as Javascript and libraries such as React, as well as knowing C# and how to create and host an API.</p>
                        <img className='w-40 h-60 rounded-full' src={me.src} alt="A picture of myself" />
                    </div>
                </div>

                <div className='inline-block self-end'>
                    <FooterComponent />
                </div>

            </div>
        </>
    );
}

export default page
