import React, { useState } from 'react'
import TailButtonLine from './TailButtonLine'

export default function MyToggleBox({color, onClick}) {
    let bgColor = {
        "blue" : "bg-blue-400",
        "orange" : "bg-orange-400",
    
      }
      //필요 없었음
      //지금 애매한게 흠.... 어떨때 써야하는지?
    //const [clickColor,setClickColor] = useState("bg-white");
    //내가 생각했던거... 뭔가 컴포넌트가 다 바뀐다고 생각
    //---> 맞는듯?
    //그럼 컴포넌트가 깜빡 거리니깐 컴포넌트 하나에 스테이트 하나만 있으면 자동으로 갱신됨?
    //---> 맞는듯?

    const [flag,setFlag] = useState(false);

    const handleOnClick = (colorValue)=>{
        setFlag(!flag);
       // setClickColor(flag == true? bgColor[colorValue] : "bg-white");

    }

    return (
        <>
            <div className={`w-full m-2 ${flag == true? bgColor[color] : "bg-white"} flex justify-center items-center flex-col`}>
                <div className='m-2'><TailButtonLine caption={color} /></div>
                <div><TailButtonLine caption={`${color} Toggle`} color={color} onClick={()=>handleOnClick(color)}/></div>
            </div>
        </>
    )
}
