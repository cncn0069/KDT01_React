import React from 'react'

export default function BorderBox({caption}) {
  return (
    <div className={`bg-green-800 text-white border-1 h-10 w-25 flex justify-center items-center`}>
      {caption}
    </div>
  )
}
