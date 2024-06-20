"use client"
import Image from "next/image";
import FooterComponent from "./components/FooterComponent";
import NavBarComponent from "./components/NavBarComponent";
import Google from "./Data/Google";
import pokeImg from "./assets/pokeImg.png"
import mockTalkImg from "./assets/mockTalkImg.png"
import aforr from "./assets/aforr.png"
import rpsls from "./assets/rpsls.png"

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
// import sql from "./assets/skillsImages/sql.png"
import ts from "./assets/skillsImages/ts.png"
import tw from "./assets/skillsImages/tw.png"
import unity from "./assets/skillsImages/unity.png"
import vercel from "./assets/skillsImages/vercel.png"
import vsc from "./assets/skillsImages/vsc.png"
import ang from "./assets/skillsImages/ang.png"
import devops from "./assets/skillsImages/devops.png"
import jira from "./assets/skillsImages/jira.png"
import notion from "./assets/skillsImages/notion.png"
import php from "./assets/skillsImages/php.png"
import post from "./assets/skillsImages/postman.png"
import slack from "./assets/skillsImages/slack.png"
import sqlite from "./assets/skillsImages/sqlite.png"
import ssqqll from "./assets/skillsImages/ssqqll.png"
import python from "./assets/skillsImages/python.png"
import me from "./assets/croppedMe.jpeg"

export default function Home() {
  return (
    <>
      <Google />
      <div className="min-h-screen h-full gradient grid">
        <NavBarComponent />

        <div className='my-14'>
          <div className='grid justify-center'>
            <p className='text-[#72503C] my-4 text-4xl text-center quando'>SKILLS</p>

            <p className="text-[#72503C] mb-4 text-2xl text-center quando">Languages, Libraries, and Frameworks</p>
            <div className='md:flex justify-evenly w-screen max-w-[1920px] my-2 max-md:grid max-md:grid-cols-2'>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6 p-1' src={html.src} alt="HTML" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">HTML</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6 p-1' src={css.src} alt="CSS" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">CSS</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6 rounded-md' src={js.src} alt="JavaScript" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">JavaScript</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={ts.src} alt="TypeScript" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">TypeScript</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={cSharp.src} alt="C Sharp" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">C#</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={dotnet.src} alt="Dotnet" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">.Net</p>
              </div>
            </div>

            <div className='md:flex justify-evenly w-screen max-w-[1920px] my-2 max-md:grid max-md:grid-cols-2'>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6 py-1' src={bs.src} alt="BootStrap" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">BootStrap</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6 py-2' src={tw.src} alt="TailwindCSS" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">TailwindCSS</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6 py-1' src={react.src} alt="React" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">React</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={next.src} alt="Next.js" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">Next.js</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={ang.src} alt="Angular" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">Angular</p>
              </div>
            </div>

            <p className="text-[#72503C] mt-6 text-xl text-center quando">Practicing</p>
            <div className='md:flex justify-evenly w-screen max-w-[1920px] my-2 max-md:grid max-md:grid-cols-2'>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={php.src} alt="PHP" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">PHP</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={python.src} alt="Python" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">Python</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={ssqqll.src} alt="SQL" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">SQL</p>
              </div>
            </div>

            <p className="text-[#72503C] my-4 text-2xl text-center quando">Programs and Tools</p>
            <div className='md:flex justify-evenly w-screen max-w-[1920px] my-2 max-md:grid max-md:grid-cols-2'>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={sqlite.src} alt="SQLite" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">SQLite</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={vercel.src} alt="Vercel" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">Vercel</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6 p-1' src={azure.src} alt="Azure" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">Azure</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={github.src} alt="Github" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">Github</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={unity.src} alt="Unity" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">Unity</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={vsc.src} alt="Visual Studio Code" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">VS Code</p>
              </div>
            </div>
            
            <div className='md:flex justify-evenly w-screen max-w-[1920px] my-2 max-md:grid max-md:grid-cols-2'>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={post.src} alt="Postman" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">Postman</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={slack.src} alt="Slack" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">Slack</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6 p-1' src={notion.src} alt="Notion" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">Notion</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={jira.src} alt="Jira" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">Jira</p>
              </div>
              <div className="max-md:mt-3">
                <div className="max-md:flex max-md:justify-center">
                  <Image width={64} height={64} className='w-16 h-16 mx-6' src={devops.src} alt="Azure DevOps" />
                </div>
                <p className="text-center quando text-base text-[#72503C]">Azure DevOps</p>
              </div>
            </div>

          </div>

          <div className='grid justify-center pt-5'>
            <p className='text-[#72503C] my-4 text-4xl text-center quando'>NOTABLE PROJECTS</p>

            <div className="grid w-screen justify-center">
              <div className="md:flex md:justify-evenly w-screen max-w-[1920px] max-md:grid max-md:justify-center">
                <div className='bg-[#FFFEF7] my-2 p-3 w-80 lg:w-[500px]'>
                  <p className="text-[40px] sedan text-[#72503C] text-center mb-3">MockTalks</p>
                  <Image width={500} height={500} src={mockTalkImg.src} className="pb-3" alt="MockTalks Front Page" />
                  <p className="quando text-base text-[#72503C]">Vercel: <span><a className="underline" target="_blank" href="https://mocktalks.vercel.app">MockTalks Website</a></span></p>
                  <p className="quando text-base text-[#72503C]">Github: <span><a className="underline" target="_blank" href="https://github.com/ItzTeeler/mocktalks">MockTalks Frontend</a></span></p>
                  <p className="quando text-base mt-3 text-[#72503C]">This website allows anyone to practice their interviewing skills. Users sign in, write a bit about themselves, and then schedule an appointment where they are paired with an available peer. Created in the Next.js framework, this was a group project. I worked mostly on the backend of the project, using C# to write an API and host it to Azure. However, I did do some work on the frontend, most notably the profile section and the associated modals to create and update it.</p>
                </div>

                <div className='bg-[#FFFEF7] my-2 p-3 w-80 lg:w-[500px]'>
                  <p className="text-[40px] sedan text-[#72503C] text-center mb-3">Pokemon Index</p>
                  <Image width={500} height={500} src={pokeImg.src} className="pb-3" alt="Pokemon Index Front Page" />
                  <p className="quando text-base text-[#72503C]">Vercel: <span><a className="underline" target="_blank" href="https://pokemon-react-rebuild-index.vercel.app">Pokemon React Site</a></span></p>
                  <p className="quando text-base text-[#72503C]">Github: <span><a className="underline" target="_blank" href="https://github.com/SebastianBrazil/Pokemon-React-Rebuild">Pokemon-React-Rebuild</a></span></p>
                  <p className="quando text-base mt-3 text-[#72503C]">This website utilizes the React library and TailwindCSS to create an application that calls on the Poke API and allows the user to search for any Pokémon before the fifth gneration, displaying some relevant data about said Pokémon. The user can also save Pokémon, which allows them quicker access to that Pokémon. This app was originally built in vanilla JS, but was rebuilt in React.</p>
                </div>
              </div>

              <div className="md:flex md:justify-evenly max-w-[1920px] w-screen max-md:grid max-md:justify-center">
                <div className='bg-[#FFFEF7] my-2 p-3 w-80 lg:w-[500px]'>
                  <p className="text-[40px] sedan text-[#72503C] text-center mb-3">Rock Paper Scissors Lizard Spock</p>
                  <Image width={500} height={500} src={rpsls.src} className="pb-3" alt="Pokemon Index Front Page" />
                  <p className="quando text-base text-[#72503C]">Vercel: <span><a className="underline" target="_blank" href="https://rpsls-six.vercel.app">RPSLS Site</a></span></p>
                  <p className="quando text-base text-[#72503C]">Github: <span><a className="underline" target="_blank" href="https://github.com/SebastianBrazil/RPSLS">RPSLS Front & Backend</a></span></p>
                  <p className="quando text-base mt-3 text-[#72503C]">{"This website is a slightly more complex game of rock paper scissors, created in vanilla JavaScript with a built-in API. The user can choose to play as one player or two players, and the single player option calls on a third-party API to simulate an opponent’s response."}</p>
                </div>

                <div className='bg-[#FFFEF7] my-2 p-3 w-80 lg:w-[500px]'>
                  <p className="text-[40px] sedan text-[#72503C] text-center mb-3">&quot;All For One&quot; Minigame Website</p>
                  <Image width={500} height={500} src={aforr.src} className="pb-3" alt="MockTalks Front Page" />
                  <p className="quando text-base text-[#72503C]">Vercel: <span><a className="underline" target="_blank" href="https://aforr.vercel.appp">All For One Website</a></span></p>
                  <p className="quando text-base text-[#72503C]">Github: <span><a className="underline" target="_blank" href="https://github.com/SebastianBrazil/AFORR">All For One Frontend</a></span></p>
                  <p className="quando text-base mt-3 text-[#72503C]">This website utilizes React to display ten minigames that are intended to show off the use of a custom API that I created in C#. The website calls on the API which is hosted via Microsoft Azure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-14 grid justify-center w-screen'>
          <p className='text-[#72503C] my-4 text-4xl text-center quando pb-10'>ABOUT ME</p>
          <div className='lg:flex max-lg:grid max-w-[1920px] justify-center max-lg:px-10'>
            <p className='quando text-2xl text-[#72503C] lg:w-[40%] lg:mr-20'>I, Sebastian Breve-Sanchez, am a web developer. I am attending CodeStack Academy, where I was first taught how to code. From here I&apos;ve had 1100+ hours to learn my current programming skillset, which ranges from Unity to fullstack web development. I have experience with frontend languages such as JavaScript and libraries such as React, as well as knowing C# and how to create and host an API. Currently I am going through an internship through CodeStack, and I&apos;m practicing PHP, Python, and SQL when I can.</p>
            <div className='max-lg:flex pt-6 max-lg:pt-10 max-lg:justify-center'>
              <Image width={400} height={400} className='w-56 h-56 lg:w-80 lg:h-80 rounded-full' src={me.src} alt="A picture of myself" />
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
