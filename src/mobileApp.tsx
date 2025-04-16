import React from 'react'
import omegaLogo from './assets/omega.webp'
import { womanData } from './data'
import WomanPage from './womanPage'

export default function MobileApp() {
  return (
    <main className='w-full h-full'>

      <div className='h-min w-full flex sticky'>
        <img src={omegaLogo} className='h-10 ml-3'></img>
        <div className="grow"></div>
        <p className='px-6 py-3 h-min text-sm text-contrast text-shadow-lg'>1º Ano B - Colégio Omega</p>
      </div>

      <h1 className='text-4xl text-center font-bold my-[30vh]'>Mulheres da <br></br> Aldeia ao Quilombo </h1>

      <div className="h-[20vh]"></div>

      
      {
        womanData.map((woman, index) => (
          <WomanPage woman={woman} key={index} />
        ))
      }

    </main>
  )
}