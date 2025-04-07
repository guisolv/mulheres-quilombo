import omegaLogo from './assets/omega.webp'
import "animate.css/animate.compat.css"
import { womanData } from './data'
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
    </main>
  )
}

export default App
