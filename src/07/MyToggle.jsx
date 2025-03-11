import React, { useState } from 'react'
import MyToggleBox from './MyToggleBox'

export default function MyToggle() {

  return (
    <div className={`grid grid-cols-2 gap-1`}>
        <MyToggleBox color={'blue'} onClick={()=>{}}/>
        <MyToggleBox color={'orange'} onClick={()=>{}}/>
    </div>
  )
}
