import React from 'react'
import TailButton from '../UI/TailButton'

export default function TrafficNav({ title, cur ,setCur}) {
    
    let tags = cur.map(item => <TailButton key={item} caption={item} color={'bg-blue-400'} onClick={() => {setCur(item)}} />);

    return (
        <div className='flex'>
            {title}
            {tags}
        </div>
    )
}
