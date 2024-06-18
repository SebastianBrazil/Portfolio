"use client"
import React from 'react'
import github from "../assets/git.png"
import linkedIn from "../assets/linkedin.png"
import resumeImg from "../assets/resumeImg.png"
import Image from 'next/image'

const FooterComponent = () => {
    const goToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/sebastian-breve-sanchez-0654772ba/")
    }

    const goToGithub = () => {
        window.open("https://github.com/SebastianBrazil")
    }
    
    const goToResume = () => {
        window.open("https://drive.google.com/file/d/1suSqWMyZ4zzwJbPqBdA5JI8nZBcEvAxy/view?usp=sharing")
    }

    return (
        <div className='w-screen gradientWhite pb-4 pt-16'>
            <div className='flex justify-center'>
                <Image width={64} height={64} className='w-16 h-16 mx-6 cursor-pointer' onClick={() => goToGithub()} src={github.src} alt="Github Link" />
                <Image width={64} height={64} className='w-16 h-16 mx-6 cursor-pointer' onClick={() => goToLinkedIn()} src={linkedIn.src} alt="LinkedIn Link" />
                <Image width={64} height={64} className='w-16 h-16 mx-6 cursor-pointer' onClick={() => goToResume()} src={resumeImg.src} alt="Resume Link" />
            </div>
            <div className='md:flex max-md:grid justify-center my-4'>
                <p className='text-[#72503C] max-md:text-center md:text-lg quando md:px-4' >sebastianbsanchez67@gmail.com</p>
                <p className='text-[#72503C] max-md:text-center md:text-lg quando md:px-4' >(209) 227-0161</p>
            </div>
            <div className='flex justify-center'>
                <p className='text-[#72503C] text-sm quando pt-4'>Made in Next.js</p>
            </div>
        </div>
    )
}

export default FooterComponent
