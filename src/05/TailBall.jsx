import React from 'react'

export default function TailBall({n}) {
  const colorBall = () => {

    switch(Math.floor(n/10))
    {
      case 0:
        return 'bg-yellow-400';

      case 1:
        return 'bg-blue-400';

      case 2:
        return 'bg-red-400';

      case 3:
        return 'bg-black';

      case 4:
        return 'bg-green-400';

      default:
        return 'bg-amber-300';

    }

    
  }

  const bgColor = {
    "n0" : "bg-yellow-400",
    "n1" : "bg-blue-400",
    "n2" : "bg-red-400",
    "n3" : "bg-black",
    "n4" : "bg-green-400",
  }

  return (
    <div className={`w-15 h-15 border-2 m-1 border-black ${bgColor[`n${Math.floor(n/10)}`]} text-white rounded-4xl flex justify-center items-center`}>
      {n}
    </div>
  )
}
