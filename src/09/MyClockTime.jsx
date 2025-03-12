import { useEffect, useState } from "react";
import Tailbutton from "../UI/Tailbutton"

import styles from "./09.module.css"

function MyClockTime() {

    //방법 1


    const [currentTime, setcurrentTime] = useState(new Date());

    useEffect(()=>{
        //타이머가 있는
        let tm = setInterval(()=>{
            setcurrentTime(new Date());
        },1000);


        //반환으로 콜백함수
        return () => {
            clearInterval(tm);
        }
        
            
        
    },[])

    useEffect(()=>{
        ;
        console.log("아아");

    },[currentTime]);
    return (
        <>
        {/* 모듈 스타일 사용하는 방법 */}
            <div className={styles.pst}>
                <span>현재 시각 : {currentTime.toLocaleTimeString()}</span>
                <div>
                    <Tailbutton caption={"시계"} />
                </div>
            </div>

        </>
    )

}

export default MyClockTime;