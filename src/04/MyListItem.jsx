//static 변수
//1 훅 임포트

import { useState } from "react";
import { FaHeart } from "react-icons/fa";




export default function MyListItem({ title, imgUrl, content ,check}) {

    const [count,setCount] = useState(0);

    const handleClick = () => {setCount(count+1)};

    return (
        <div className='flex border-1 w-full h-auto border-gray-400 flex-row'>
            <div className="w-1/4">
                <img src={imgUrl}></img>

            </div>
            <div className='p-2 w-3/4 ml-0.5'>
                <div className='text-2xl mb-2'>{title}</div>
                <div>{content}</div>
                {check != 0? <span className='flex justify-end items-center font-bold'>
                    <FaHeart className="text-red-500 mr-0.5 hover:cursor-pointer"
                     onClick={handleClick}/>좋아요{count}</span> :<span></span>
                }
            </div>
        </div>
    )
}
