import React from 'react'

export default function TailCation({caption}) {
  return (
    <div className='inline-flex border rounded-2xl bg-gray-200 font-bold text-gray-600 m-1 p-1 cursor-pointer'>
      {caption}
    </div>
  )
}
