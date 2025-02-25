import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FcAlarmClock } from "react-icons/fc";
import { FcCamcorderPro } from "react-icons/fc";


function App() {


  return (
    // 프래그먼트 태그
    <>
    <div className='flex justify-center items-center flex-col '>
      <div className='flex w-full justify-center items-center p-10'>
        <a href="https://vite.dev" target="_blank" >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='font-bold'>Vite + React</h1>
      <div className="flex justify-center items-center w-100 m-10">
        <p className='underline'>
          안순현
        </p>
        <p className='text-red-600'>
        <FcAlarmClock /><FcCamcorderPro />
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App
