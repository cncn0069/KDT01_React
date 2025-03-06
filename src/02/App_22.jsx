import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello from './01/Hello'
import MyClock from './02/MyClock'



//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen xl:w-2/3 xl:flex xl:flex-col xl:justify-center xl:items-center'>
        <div className='bg-orange-300 w-full h-2 rounded-t-4xl pl-5 pt-2 mt-2'>PNU KD01</div>
        <header className='w-full h-25 font-bold bg-orange-300 text-black flex justify-center items-center rounded-b-3xl'>
          02 시계 만들기
        </header>
        <div className="w-full h-70 flex justify-center items-center flex-col">
          <MyClock />
        </div>
        <footer className="bg-amber-900 w-full h-10 flex justify-center items-center">
          이름: KevinJo<br />
          연락처: 010-8888-8888<br />
        </footer>
      </div>

    </>
  )
}

export default App
