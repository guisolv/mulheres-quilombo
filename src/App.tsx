import omegaLogo from './assets/omega.webp'
import "animate.css/animate.compat.css"
import { womanData } from './data'
import WomanPage from './womanPage'
import "./styles/app.css"
import "./styles/pageAnimations.css"


function App() {
  return (
    <main className='h-full w-full bg-background '>
      <header className="fixed h-20 left-0 right-0 flex flex-row bg-background z-40">
        <img src={omegaLogo} className='h-12 ml-3 mt-3'></img>
      </header>
      <h1 className='fixed border-contrast text-4xl animate-header-text z-50'>Mulheres da <br></br>Aldeia ao Quilombo</h1>

      <div className="spacing h-[100vh]"></div>

      {
        womanData.map((woman, index) => (
          <WomanPage woman={woman} key={index} />
        ))
      }

    </main>
  )
}

export default App
