import ScrollingText from './components/scrollingText'
import omegaLogo from './assets/omega.webp'
import "animate.css/animate.compat.css"
import { womanData } from './data'
import WomanPage from './womanPage'


function App() {
  return (
    <main className='h-screen w-full'>
      <div className="fixed h-20 left-0 right-0">
        <ScrollingText>Mulheres da <br></br>Aldeia ao Quilombo</ScrollingText>
        <img src={omegaLogo} className='h-12 ml-3 mt-3'></img>
      </div>

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
