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

export default function Home() {
  return (
    <>
      <div className="min-h-screen h-full gradient grid">
        <NavBarComponent />

        <div className='my-14'>
          <div className='grid justify-center'>
            <p className='text-[#9e7653] my-4 text-4xl text-center quando'>SKILLS</p>

            <div className='flex justify-evenly w-screen my-2'>
              <div>
                <img className='w-16 h-16 mx-6 py-2' src={html.src} alt="HTML" />
                <p className="text-center">HTML</p>
              </div>
              <div>
                <img className='w-16 h-16 mx-6 p-1' src={css.src} alt="CSS" />
                <p className="text-center">CSS</p>
              </div>
              <div>
                <img className='w-16 h-16 mx-6 py-1' src={js.src} alt="JavaScript" />
                <p className="text-center">JavaScript</p>
              </div>
              <div>
                <img className='w-16 h-16 mx-6' src={ts.src} alt="TypeScript" />
                <p className="text-center">TypeScript</p>
              </div>
              <div>
                <img className='w-16 h-16 mx-6' src={cSharp.src} alt="C Sharp" />
                <p className="text-center">C#</p>
              </div>
              <div>
                <img className='w-16 h-16 mx-6' src={dotnet.src} alt="Dotnet" />
                <p className="text-center">.Net</p>
              </div>
            </div>
            <div className='flex justify-evenly w-screen my-2'>
              <div>
                <img className='w-16 h-16 mx-6' src={sql.src} alt="MySql" />
                <p className="text-center">MySQL</p>
              </div>
              <div>
                <img className='w-16 h-16 mx-6 py-1' src={bs.src} alt="BootStrap" />
                <p className="text-center">BootStrap</p>
              </div>
              <div>
                <img className='w-16 h-16 mx-6 py-2' src={tw.src} alt="TailwindCSS" />
                <p className="text-center">TailwindCSS</p>
              </div>
              <div>
                <img className='w-16 h-16 mx-6' src={react.src} alt="React" />
                <p className="text-center">React</p>
              </div>
            </div>
            <div className='flex justify-evenly w-screen my-2'>
              <div>
                <img className='w-16 h-16 mx-6' src={next.src} alt="Next.js" />
                <p className="text-center">Next.js</p>
              </div>
              <div>
                <img className='w-16 h-16 mx-6' src={vercel.src} alt="Vercel" />
                <p className="text-center">Vercel</p>
              </div>
              <div>
                <img className='w-16 h-16 mx-6 py-1' src={azure.src} alt="Azure" />
                <p className="text-center">Azure</p>
              </div>
              <div>
                <img className='w-16 h-16 mx-6' src={github.src} alt="Github" />
                <p className="text-center">Github</p>
              </div>
              <div>
                <img className='w-16 h-16 mx-6' src={unity.src} alt="Unity" />
                <p className="text-center">Unity</p>
              </div>
              <div>
                <img className='w-16 h-16 mx-6' src={vsc.src} alt="Visual Studio Code" />
                <p className="text-center">VS Code</p>
              </div>
            </div>

          </div>

          <div className='grid justify-center pt-5'>
            <p className='text-[#9e7653] my-4 text-4xl text-center quando'>NOTABLE PROJECTS</p>

            <div className="flex justify-evenly w-screen">
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

        <div className='inline-block self-end'>
          <FooterComponent />
        </div>

      </div>
    </>
  );
}
