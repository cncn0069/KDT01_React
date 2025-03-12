
import {useEffect, useState} from "react"
import TailButtonLine from "../07/TailButtonLine"

export default function MyEffect() {
    const [msg, setMsg] = useState('');
    const [color, setColor] = useState('blue');

    //셋함수로도 값이 안바뀌면 값이 그대로?
    const handleClick = ()=> {
        if(msg === '') {
            setMsg("useEffect 예재: state 변수 변경시"+ Math.random);
        }
        else{
            setMsg('');
        } 
    }

    //useEffect(()=>{},[]);
    useEffect(()=>{
        console.log("의존성 배열[]일 때 컴포넌트 생성시 한번시행");
        console.log("msg=", msg);
        console.log("color=", color);
    },[]);

    //2. static변수 값이 변경 될때마다

    useEffect(()=>{
        setColor(color == "blue" ? setColor("orange"):setColor("blue"))
        console.log("msg =" + msg);
        console.log("color=", color);
    },[msg])

    //3. 어떤 state변수든 변경이 될 때마다 실행

    useEffect(()=>{});
  return (
    <div className='w-full text-2xl font-bold flex justify-center items-center'>
        <div>{msg}</div>
      <TailButtonLine caption="useEffect 예재" color={"blue"} onClick={handleClick} />
    </div>
  )
}
