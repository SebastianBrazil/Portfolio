"use client"
import FooterComponent from "./components/FooterComponent";
import NavBarComponent from "./components/NavBarComponent";
import pokeImg from "./assets/pokeImg.png"
import mockTalkImg from "./assets/mockTalkImg.png"

import github from "./assets/git.png"
import azure from "./assets/skillsImages/azure.png"
import bs from "./assets/skillsImages/bs.png"
import cSharp from "./assets/skillsImages/cSharp.png"
import css from "./assets/skillsImages/css.png"
import dotnet from "./assets/skillsImages/dotnet.png"
import html from "./assets/skillsImages/html.png"
import js from "./assets/skillsImages/js.png"
import next from "./assets/skillsImages/next.png"
import react from "./assets/skillsImages/react.png"
import sql from "./assets/skillsImages/sql.png"
import ts from "./assets/skillsImages/ts.png"
import tw from "./assets/skillsImages/tw.png"
import unity from "./assets/skillsImages/unity.png"
import vercel from "./assets/skillsImages/vercel.png"
import vsc from "./assets/skillsImages/vsc.png"
import me from "./assets/croppedMe.jpeg"

export default function Home() {
  return (
    <>
      <div className="min-h-screen h-full gradient grid">
        <NavBarComponent />

        <div className='my-14'>
          <div className='grid justify-center'>
            <p className='text-[#9e7653] my-4 text-4xl text-center quando'>SKILLS</p>

            <div className='md:flex justify-evenly w-screen my-2 max-md:grid max-md:grid-cols-2'>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6 py-2' src={html.src} alt="HTML" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">HTML</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6 p-1' src={css.src} alt="CSS" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">CSS</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6 py-1' src={js.src} alt="JavaScript" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">JavaScript</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6' src={ts.src} alt="TypeScript" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">TypeScript</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6' src={cSharp.src} alt="C Sharp" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">C#</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6' src={dotnet.src} alt="Dotnet" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">.Net</p>
              </div>
            </div>

            <div className='md:flex justify-evenly w-screen my-2 max-md:grid max-md:grid-cols-2'>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6' src={sql.src} alt="MySql" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">MySQL</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6 py-1' src={bs.src} alt="BootStrap" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">BootStrap</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6 py-2' src={tw.src} alt="TailwindCSS" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">TailwindCSS</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6' src={react.src} alt="React" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">React</p>
              </div>
            </div>

            <div className='md:flex justify-evenly w-screen my-2 max-md:grid max-md:grid-cols-2'>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6' src={next.src} alt="Next.js" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">Next.js</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6' src={vercel.src} alt="Vercel" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">Vercel</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6 py-1' src={azure.src} alt="Azure" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">Azure</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6' src={github.src} alt="Github" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">Github</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6' src={unity.src} alt="Unity" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">Unity</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <img className='w-16 h-16 mx-6' src={vsc.src} alt="Visual Studio Code" />
                </div>
                <p className="text-center quando text-base text-[#9e7653]">VS Code</p>
              </div>
            </div>

          </div>

          <div className='grid justify-center pt-5'>
            <p className='text-[#9e7653] my-4 text-4xl text-center quando'>NOTABLE PROJECTS</p>

            <div className="md:flex md:justify-evenly w-screen max-md:grid max-md:justify-center">
              <div className='bg-[#FFFEF7] my-2 p-3 w-80 lg:w-[500px]'>
                <p className="text-[40px] sedan text-[#9e7653] text-center mb-3">MockTalks</p>
                <img src={mockTalkImg.src} className="pb-3" alt="MockTalks Front Page" />
                <p className="quando text-base text-[#9e7653]">Vercel: <span><a className="underline" target="_blank" href="https://mocktalks.vercel.app">MockTalks Website</a></span></p>
                <p className="quando text-base text-[#9e7653]">Github: <span><a className="underline" target="_blank" href="https://github.com/ItzTeeler/mocktalks">MockTalks Frontend</a></span></p>
                <p className="quando text-base mt-3 text-[#9e7653]">This website allows anyone to practice their interviewing skills. Users sign in, write a bit about themselves, and then schedule an appointment where they are paired with an available peer. Created in the Next.js framework, this was a group project. I worked mostly on the backend of the project, using C# to write an API and host it to Azure. However, I did do some work on the frontend, most notably the profile section and the associated modals to create and update it.</p>
              </div>

              <div className='bg-[#FFFEF7] my-2 p-3 w-80 lg:w-[500px]'>
                <p className="text-[40px] sedan text-[#9e7653] text-center mb-3">Pokemon Index</p>
                <img src={pokeImg.src} className="pb-3" alt="Pokemon Index Front Page" />
                <p className="quando text-base text-[#9e7653]">Vercel: <span><a className="underline" target="_blank" href="https://pokemon-react-rebuild-index.vercel.app">Pokemon React Site</a></span></p>
                <p className="quando text-base text-[#9e7653]">Github: <span><a className="underline" target="_blank" href="https://github.com/SebastianBrazil/Pokemon-React-Rebuild">Pokemon-React-Rebuild</a></span></p>
                <p className="quando text-base mt-3 text-[#9e7653]">This website utilizes the React library and TailwindCSS to create an application that calls on the Poke API and allows the user to search for any Pokémon before the fifth gneration, displaying some relevant data about said Pokémon. The user can also save Pokémon, which allows them quicker access to that Pokémon. This app was originally built in vanilla JS, but was rebuilt in React.</p>
              </div>
            </div>

            <div className="md:flex md:justify-evenly w-screen max-md:grid max-md:justify-center">
              <div className='bg-[#FFFEF7] my-2 p-3 w-80 lg:w-[500px]'>
                <p className="text-[40px] sedan text-[#9e7653] text-center mb-3">MockTalks</p>
                <img src={mockTalkImg.src} className="pb-3" alt="MockTalks Front Page" />
                <p className="quando text-base text-[#9e7653]">Vercel: <span><a className="underline" target="_blank" href="https://mocktalks.vercel.app">MockTalks Website</a></span></p>
                <p className="quando text-base text-[#9e7653]">Github: <span><a className="underline" target="_blank" href="https://github.com/ItzTeeler/mocktalks">MockTalks Frontend</a></span></p>
                <p className="quando text-base mt-3 text-[#9e7653]">This website allows anyone to practice their interviewing skills. Users sign in, write a bit about themselves, and then schedule an appointment where they are paired with an available peer. Created in the Next.js framework, this was a group project. I worked mostly on the backend of the project, using C# to write an API and host it to Azure. However, I did do some work on the frontend, most notably the profile section and the associated modals to create and update it.</p>
              </div>

              <div className='bg-[#FFFEF7] my-2 p-3 w-80 lg:w-[500px]'>
                <p className="text-[40px] sedan text-[#9e7653] text-center mb-3">Pokemon Index</p>
                <img src={pokeImg.src} className="pb-3" alt="Pokemon Index Front Page" />
                <p className="quando text-base text-[#9e7653]">Vercel: <span><a className="underline" target="_blank" href="https://pokemon-react-rebuild-index.vercel.app">Pokemon React Site</a></span></p>
                <p className="quando text-base text-[#9e7653]">Github: <span><a className="underline" target="_blank" href="https://github.com/SebastianBrazil/Pokemon-React-Rebuild">Pokemon-React-Rebuild</a></span></p>
                <p className="quando text-base mt-3 text-[#9e7653]">This website utilizes the React library and TailwindCSS to create an application that calls on the Poke API and allows the user to search for any Pokémon before the fifth gneration, displaying some relevant data about said Pokémon. The user can also save Pokémon, which allows them quicker access to that Pokémon. This app was originally built in vanilla JS, but was rebuilt in React.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-14'>
          <p className='text-[#9e7653] my-4 text-4xl text-center quando pb-10'>ABOUT ME</p>
          <div className='md:flex max-md:grid justify-center max-lg:px-10'>
            <p className='quando text-2xl text-[#9e7653] lg:w-[40%] md:mr-20'>I, Sebastian Breve-Sanchez, am a web developer. I currently attend CodeStack Academy, where I was first taught how to code. From here I learned all of my current programming skillset, which ranges from Unity to fullstack web development. I have experience with frontend languages such as Javascript and libraries such as React, as well as knowing C# and how to create and host an API.</p>
            <div className='max-md:flex pt-6 max-md:pt-10 max-md:justify-center'>
              <img className='w-80 h-80 rounded-full' src={me.src} alt="A picture of myself" />
            </div>
          </div>
        </div>

        <div className='inline-block self-end'>
          <FooterComponent />
        </div>

      </div>
    </>
  );
}
