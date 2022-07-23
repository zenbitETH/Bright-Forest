import BF from '../Assets/BFlogo.svg';
import Hud from '../Components/Hud';
import PC from '../Assets/punkcities.png';
import Deco from '../Assets/deco logo.svg'

function Home() {
    return (
        <div className="App overflow-auto">
        <Hud/>
        <section className='my-20 '>
            <img src={BF} className='xl:w-1/3 w-96 mx-auto'/>
            <div className='text-xl xl:text-3xl'>A dapp to gamify urban mobility with bicycle rides</div>
            <div className='text-lg'>Developed @ HackFS 2022</div>
        </section>
        <section className=''>
            <div className='text-3xl my-5'>Why Bright Forest?</div>
            
            <div className="bigBG">
            <div className='bgTitle'>Web3 Cities ecosystem</div>
                <div className='smallBG'>
                    <div className='text-8xl animate-bounce'>📍</div>
                    Uses IRL coordinates for:
                </div>
                <div className='logosBG'>
                    <img src={PC} className="logos"/>
                    <div>Public Places NFTs</div>
                </div>
                <div className='logosBG2 '>
                    <img src={Deco} className="logos"/>
                    <div>Small Business NFTs</div>
                </div>
            </div>
        </section>
        <section>
            <div class="bigBG">
                <div className='bgTitle2'>Incentivice citizens mobility</div>
                <div className='smallBG2'>
                    <div className='bigIcon'>🚗</div>
                    Car is the most used transport in many cities.
                </div>
                <div className='animate-bounce text-5xl col-span-4'>↓</div>
                <div className='smallBG2'>
                    <div className='text-8xl animate-pulse pb-3'>🛴🕵️💳</div>
                    Alternatives rise with degen models
                </div>
                <div className='bgTitle2'>How to regen citizen mobility?</div>
            </div>
            <div class="bigBG2">
                <div className='bgTitle3'>Bright Forest</div>
                <div className='smallBG'>
                    <div className='text-8xl animate-pulse'>🏅⚡🚲</div>
                    Reward energy spent on bicycle rides
                </div>
                <div className='smallBG3'>
                    <div className='bigIcon'>⛲</div>
                    IRL & Web3 Public goods
                </div>
                <div className='smallBG3'>
                    <div className='bigIcon'>🎮</div>
                    Gamified mobility
                </div>
                <div className='smallBG3'>
                    <div className='bigIcon'>🛡️</div>
                    Data privacy with ZKsnarks
                </div>
            </div>
            <div class="bigBG2">
                <div className='bgTitle3'>How does BF it work? </div>
                <div className='smallBG'>
                    <div className='text-8xl animate-pulse'>🪐⚡🌎</div>
                    Based on Dark Forest Game
                </div>
                <div className='smallBG'>
                    <div className='text-8xl animate-pulse'>🚲⚡🌇</div>
                    Move game units between Punk Cities places
                </div>
                <div className='smallBG'>
                    <div className='text-8xl animate-pulse'>🚲📦🏪</div>
                    Deliver products sold on Deco business
                </div>
            </div>
        </section>
        <div class="text-9xl py-96 mx-10 text-white font-black animate-pulse"> 🕹️Demo time!</div>

        <div class="text-6xl mt-20 mx-10 text-white font-black hover:animate-pulse">
          Built with:
        </div>
        <div class="grid xl:grid-cols-5 gap-5 mt-20 text-white text-xl font-exo pb-96">
          <a href="" class="builtBG">1. React</a>
          <a href="" class="builtBG">2. SnarksJS</a>
          <a href="/" class="builtBG">3. Google API</a>
          <a href="" class="builtBG">4. IPFS</a>
          <a href="" class="builtBG">5. Tableland</a>
          <a href="" class="builtBG">6. The graph</a>
          <a href="/" class="builtBG">7. POAP</a>
          <a href="/" class="builtBG">8. Polygon</a>
          <a href="/" class="builtBG">9. Tailwind</a>
          <a href="/" class="builtBG">10. Punk Cities places</a>
        </div>
        <div class="text-6xl mt-20 mx-10 text-white font-black hover:animate-pulse ">
          Future work:
        </div>
        <div class="grid xl:grid-cols-3 gap-5 mt-20 text-white text-2xl font-exo mb-96">
          <div class="Future cursor-default">
            1. Custom trips bewteen Punk Cities
            <div class="xl:text-9xl py-20 ">
                🗺️
            </div>
          </div>
          <div class="Future cursor-default">
            2. Multiplayer trips
            <div class="xl:text-9xl py-20 ">
                🚴‍♂️🚴‍♀️
            </div>
          </div>
          <div class="Future cursor-default">
            3. Deco implementation
            <div class="xl:text-9xl py-20 ">
                🏪
            </div>
          </div>
        </div>
        <div class="text-6xl mx-10 text-white font-black hover:animate-pulse my-10 text center">
          Team:
        </div>
        <div class="grid grid-cols-3 gap-5 my-10 text-white text-2xl font-exo justify-items-center">
          <a href="https://github.com/HabacucMX">
            <div class="teamMB"><img src="https://avatars.githubusercontent.com/u/57845110?s=400&u=5460231e3addfd30b2f4f35650c81206e3d7552f&v=4" class="teamIMG"/>
              habacuc.eth<div class="text-lg text-rider-500">UX/UI & Product design</div></div></a>
          <a href="https://github.com/shyam-patel-kira">
            <div class="teamMB"><img src="https://avatars.githubusercontent.com/u/57172347?v=4" class="teamIMG"/>
            Shyam Patel<div class="text-lg text-rider-500">ZKsnarks & Smart contracts</div></div></a>
          <a href="https://github.com/Trillaboi">
            <div class="teamMB"><img src="https://avatars.githubusercontent.com/u/10591684?v=4" class="teamIMG"/>
            Chisom Ikejiani<div class="text-lg text-rider-500">Fullstack dev</div></div></a>
        </div>
      


        </div>
    )
}
export default Home;