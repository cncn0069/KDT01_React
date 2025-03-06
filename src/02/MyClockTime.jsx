function MyClockTime(){
    const date = new Date();

    //방법 1
    let time = date.toLocaleTimeString();

    return(
        <>
        <span>현재 시각 : {time}</span>
        </>
    )

    //방법 2
    // return(
    //     <>
    //     <span>현재 시각 : {new Date.toLocaleTimeString()}</span>
    //     </>
    // )
}

export default MyClockTime;