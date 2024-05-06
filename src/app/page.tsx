"use client"
import FooterComponent from "./components/FooterComponent";
import NavBarComponent from "./components/NavBarComponent";
import pokeImg from "./assets/pokeImg.png"
import mockTalkImg from "./assets/mockTalkImg.png"

export default function Home() {
  return (
    <>
      <div className="min-h-screen h-full gradient grid">
        <NavBarComponent />

        <div className='my-14 grid grid-cols-2'>
          <div className='col-span-1 grid justify-center'>
            <p className='text-[#9e7653] my-4 text-4xl text-center quando'>NOTABLE PROJECTS</p>

            <div className="grid justify-center">
              <div className='bg-white my-2 p-3 w-80'>
                <p className="text-[40px] sedan text-[#9e7653] text-center mb-3">MockTalks</p>
                <img src={mockTalkImg.src} alt="MockTalks Front Page" />
                <p className="quando text-base text-[#9e7653]">Vercel: <span><a target="_blank" href="https://mocktalks.vercel.app">MockTalks Website</a></span></p>
                <p className="quando text-base text-[#9e7653]">Github: <span><a target="_blank" href="https://github.com/ItzTeeler/mocktalks">Pokemon-React-Rebuild</a></span></p>
                <p className="quando text-base mt-3 text-[#9e7653]">This website utilizes the React library and TailwindCSS to create an application that calls on the Poke API and allows the user to search for any Pokémon before the fifth gneration, displaying some relevant data about said Pokémon. The user can also save Pokémon, which allows them quicker access to that Pokémon. This app was originally built in vanilla JS, but was rebuilt in React.</p>
              </div>

              <div className='bg-white my-2 p-3 w-80'>
                <p className="text-[40px] sedan text-[#9e7653] text-center mb-3">Pokemon Index</p>
                <img src={pokeImg.src} alt="Pokemon Index Front Page" />
                <p className="quando text-base text-[#9e7653]">Vercel: <span><a target="_blank" href="https://pokemon-react-rebuild-index.vercel.app">Pokemon React Site</a></span></p>
                <p className="quando text-base text-[#9e7653]">Github: <span><a target="_blank" href="https://github.com/SebastianBrazil/Pokemon-React-Rebuild">Pokemon-React-Rebuild</a></span></p>
                <p className="quando text-base mt-3 text-[#9e7653]">This website utilizes the React library and TailwindCSS to create an application that calls on the Poke API and allows the user to search for any Pokémon before the fifth gneration, displaying some relevant data about said Pokémon. The user can also save Pokémon, which allows them quicker access to that Pokémon. This app was originally built in vanilla JS, but was rebuilt in React.</p>
              </div>
            </div>

          </div>

          <div className='col-span-1 grid justify-center'>
          <p className='text-[#9e7653] my-4 text-4xl text-center quando'>SKILLS</p>

            <div className='bg-white w-80 h-80'>

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
