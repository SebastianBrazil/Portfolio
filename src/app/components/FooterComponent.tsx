"use client"
import React from 'react'
import github from "../assets/git.png"
import linkedIn from "../assets/linkedin.png"
import resumeImg from "../assets/resumeImg.png"

const FooterComponent = () => {
    const goToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/sebastian-breve-sanchez-0654772ba/")
    }

    const goToGithub = () => {
        window.open("https://github.com/SebastianBrazil")
    }
    
    const goToResume = () => {
        window.open("https://drive.google.com/file/d/1NNPjRPQR1bzykF30MCqi9uZCjCSOqCA-/view?usp=sharing")
    }

    return (
        <div className='w-screen gradientWhite pb-4 pt-16'>
            <div className='flex justify-center'>
                <img className='w-16 h-16 mx-6 cursor-pointer' onClick={() => goToGithub()} src={github.src} alt="Github Link" />
                <img className='w-16 h-16 mx-6 cursor-pointer' onClick={() => goToLinkedIn()} src={linkedIn.src} alt="LinkedIn Link" />
                <img className='w-16 h-16 mx-6 cursor-pointer' onClick={() => goToResume()} src={resumeImg.src} alt="Resume Link" />
            </div>
            <div className='flex justify-center my-4'>
                <p className='text-[#9e7653] text-lg quando px-10' >sbrevesanchez088@gmail.com</p>
                <p className='text-[#9e7653] text-lg quando px-2' >(209) 662-9916 -- Texts preferred</p>
            </div>
            <div className='flex justify-center'>
                <p className='text-[#9e7653] text-sm quando pt-4'>Made in Next.js</p>
            </div>
        </div>
    )
}

export default FooterComponent
