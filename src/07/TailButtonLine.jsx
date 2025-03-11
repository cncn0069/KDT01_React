import React from 'react'

export default function TailButtonLine({caption, color,onClick}) {
  let bgColor = {
    "blue" : "bg-blue-400",
    "orange" : "bg-orange-400",
  }
  let bgHoverColor = {
    "blue" : "hover:bg-blue-200",
    "orange" : "hover:bg-orange-200",
  }
  
    return (
      //딕셔너리는 값이 없으면 undefined
      //테일윈드 사용시 통째로 명령문을 쓰자 예)"hover:bg-orange-200"
    <div className={`${bgColor[color] ?? 'bg-white'} ${color && `cursor-pointer`} text-center border-2 p ${bgHoverColor[color]}`} onClick={onClick}>
      {caption}
    </div>
  )
}
