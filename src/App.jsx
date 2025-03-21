import { useState } from 'react'
import MyToggle from './07/MyToggle'
import MyEffect from './08/MyEffect'
import MyClock from './09/MyClock'
import BoxOffice from './13/BoxOffice'

import TrafficMain from './11/TrafficMain'
import MyRef from './12/MyRef'
import Gallery from './14/Gallery/Gallery'
import Festival from './14/Festival'



//import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //mx-auto 전체 화면 양쪽 마진을 설정할 때
  //가운데는 flex-grow
  //자동 줄넘기기 flex-wrap 속성


  return (
    <>
      <div className='w-2/3 min-h-20 mx-auto
                      flex flex-col xl:w-2/3 xl:flex-col xl:justify-center xl:items-center'>
        <header className='w-full h-30 min-h-30 mb-5 font-bold bg-orange-300 text-black flex justify-center items-center rounded-b-3xl'>

        </header>
        <div className="w-full h-full flex-grow flex flex-col overflow-y-auto justify-center items-center mb-5">
          <Festival />
        </div>
        <footer className="bg-amber-900 w-full h-20 min-h-20 flex justify-center items-center px-10">
        </footer>
      </div>

    </>
  )
}

export default App
