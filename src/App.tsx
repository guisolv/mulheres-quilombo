import omegaLogo from './assets/omega.webp'
import "animate.css/animate.compat.css"
import { sources, womanData } from './data'
import WomanPage from './womanPage'
import "./styles/app.css"
import "./styles/pageAnimations.css"
import leaf from './assets/leaf.png'

function App() {
  return (
    <main className='h-full w-full'>
      <header >
        <img src={omegaLogo} className='h-12 ml-3 mt-3'></img>
        <div className="grow"></div>
        <p className='my-auto px-6 text-lg text-contrast text-shadow-lg self-end'>1º Ano B - Colégio Omega</p>
      </header>
      <div className="fixed animate-reveal-shadow my-20 w-full drop-shadow-lg drop-shadow-black/40 h-[1px] bg-background z-30"></div>
      <h1 className='fixed border-contrast text-4xl animate-header-text z-50'>Mulheres da <br></br>Aldeia ao Quilombo</h1>

      <div className="spacing h-[100vh]"></div>

      {
        womanData.map((woman, index) => (
          <WomanPage woman={woman} key={index} />
        ))
      }


      <img className='fixed w-96 h-96 bottom-0 animate-leaf -translate-x-16 translate-y-16 -z-10' src={leaf}></img>
      
      <img className='fixed w-96 h-96 bottom-0 right-0 -scale-x-100 animate-leaf translate-x-96 translate-y-16 -z-10' src={leaf}></img>

      <div className='w-9/12 h-28 mx-auto bg-background'>
        <div className="w-1/2 h-20 mx-auto" tabIndex={0}>
          <div className="w-96 border-t-2 mb-4 mx-auto border-contrast animate-reveal-div" />
          <h1 className='font-bold text-4xl text-center text-contrast animate-reveal-div'>Fontes:</h1>
        </div>
      </div>
      <ul className='w-6/12 mx-auto list-disc'>
        {
          sources.map((source, index) => (
            <li className='text-accent underline' key={index}><a href={source}>{source}</a></li>
          ))
        }
      </ul>
        
      
      <div className="h-32">

      </div>
      
    </main>
  )
}

export default App
