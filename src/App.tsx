import ScrollingText from './components/ScrollingText'
import omegaLogo from './assets/omega.webp'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll'

function App() {
  return (
    <main className='h-screen w-full'>
      <div className="fixed h-20 left-0 right-0">
        <ScrollingText>Mulheres da <br></br>Aldeia ao Quilombo</ScrollingText>
        <img src={omegaLogo} className='h-12 ml-3 mt-3'></img>
      </div>

      <div className="spacing h-[100vh]"></div>
      <div className="w-10/12 h-[90vh] flex flex-row mx-auto justify-center">

        <ScrollAnimation animateIn='fadeInLeft' duration={0.75} delay={1.5}>
          <div className="w-96 border-t-2 mb-4" />
          <h1 className='font-bold text-4xl text-center'>Katú Mirim</h1>
        </ScrollAnimation>
        
      </div>

    </main>
  )
}

export default App
